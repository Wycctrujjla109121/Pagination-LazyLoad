'use client'

import { useCallback, useEffect } from 'react';
import { Flex, Grid, Pagination, SimpleGrid } from '@mantine/core';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PostType } from '@/types';
import { Card } from '@/components';

export function PaginationList({ limit, totalCount, posts }: { limit: number, totalCount: number, posts: PostType[] }) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    useEffect(() => {
        !searchParams.has('page') && router.push(pathname + '?' + createQueryString('page', '1'))
    }, [])

    return (
        <Flex align='center' direction='column' rowGap={20}>
            <SimpleGrid
                cols={{ xs: 2, sm: 3, lg: 4 }}>
                {
                    posts.map(post =>
                        <Card post={post} />
                    )
                }
            </SimpleGrid>
            <Pagination
                total={totalCount / limit}
                value={Number(searchParams.get('page')) ?? 1}
                onChange={e => router.push(pathname + '?' + createQueryString('page', `${e}`))} />
        </Flex>
    );
}