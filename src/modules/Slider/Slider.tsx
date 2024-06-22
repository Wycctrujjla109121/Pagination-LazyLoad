'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import s from './Slider.module.scss'
import { PostType } from '@/types';
import { Card } from '@/components';

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
                        <Card post={post} />
                    </SwiperSlide>)
            }
        </Swiper >
    );
}