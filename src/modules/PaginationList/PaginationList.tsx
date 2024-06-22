'use client'

import { useEffect } from 'react';
import { Flex, Pagination, SimpleGrid } from '@mantine/core';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PostType } from '@/types';
import { Card } from '@/components';
import { useSearchQuery } from '@/hooks';
import { ListSimpleGrid } from '../ListSimpleGrid';

export function PaginationList({ limit, totalCount, posts }: { limit: number, totalCount: number, posts: PostType[] }) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const createQueryString = useSearchQuery()

    useEffect(() => {
        !searchParams.has('page') && router.push(pathname + '?' + createQueryString('page', '1'))
    }, [])

    return (
        <Flex align='center' direction='column' rowGap={20}>
            <ListSimpleGrid>
                {
                    posts.map(post =>
                        <Card post={post} key={post.id} />
                    )
                }
            </ListSimpleGrid>
            <Pagination
                total={totalCount / limit}
                value={Number(searchParams.get('page')) ?? 1}
                onChange={e => router.push(pathname + '?' + createQueryString('page', `${e}`))} />
        </Flex>
    );
}