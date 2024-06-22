import { PostType } from '@/types';
import s from './Card.module.scss'
import { Button, Flex, Paper, Text, Title } from '@mantine/core';

export function Card({ post }: { post: PostType }) {
    return (
        <Paper shadow="md" p="xl" radius="md" className={s.card}>
            <Flex rowGap={10} direction='column'>
                <Text lineClamp={3} size="sm" className={s.card__text}>
                    {post.body}
                </Text>
                <Title order={3} lineClamp={2} className={s.card__text}>
                    {post.title}
                </Title>
            </Flex>
            <Button>{post.id}</Button>
        </Paper>
    );
}