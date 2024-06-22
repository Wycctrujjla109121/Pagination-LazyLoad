'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import s from './Slider.module.scss'
import { PostType } from '@/types';
import { Button, Paper, Text, Title } from '@mantine/core';

export function Slider({ posts }: { posts: PostType[] }) {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true
            }}
            modules={[Pagination]}
            className={s.slider}
        >
            {
                posts.map(post =>
                    <SwiperSlide className={s.slider__slide} key={post.id}>
                        <Paper shadow="md" p="xl" radius="md" className={s.card}>
                            <Text lineClamp={3} size="sm" className={s.card__text}>
                                {post.body}
                            </Text>
                            <Title order={3} lineClamp={2} className={s.card__text}>
                                {post.title}
                            </Title>
                        </Paper>
                    </SwiperSlide>)
            }
        </Swiper >
    );
}