'use client'

import { Card, Loader } from '@/components';
import { useFetchLazyLoad } from '@/hooks';
import { PostType } from '@/types';
import { Flex } from '@mantine/core';
import qs from 'qs';
import { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ListSimpleGrid } from '../ListSimpleGrid';
import { ErrorMessage } from '../ErrorMessage';

const limit = 10
export function LazyLoadList() {

    const [dataPosts, setDataPosts] = useState<PostType[]>([])
    const [page, setPage] = useState(1)

    const { ref, inView } = useInView({
        threshold: 1,
    });

    const queryString = qs.stringify({
        _start: limit * (page - 1),
        _limit: limit
    }, {
        encodeValuesOnly: true,
    })

    const { resPosts, isLoading, totalCount, error } = useFetchLazyLoad(queryString)

    const isFetching = useMemo<boolean>(
        () => +totalCount > dataPosts.length,
        [totalCount, dataPosts]
    )

    useEffect(() => {
        if (resPosts && isFetching) {
            setDataPosts(prev => [...prev, ...resPosts])
        }
    }, [resPosts])

    useEffect(() => {
        if (inView && isFetching && dataPosts) {
            setPage(page => (page += 1))
        }
    }, [inView])

    if (error) {
        return <ErrorMessage />
    }

    return (
        <Flex rowGap={20} direction='column' align={'center'}>
            <ListSimpleGrid>
                {
                    dataPosts.map(post => <Card key={post.id} post={post} />)
                }
            </ListSimpleGrid>
            {
                !isLoading && isFetching && <div ref={ref}>
                    <Loader />
                </div>
            }
        </Flex >
    );
}