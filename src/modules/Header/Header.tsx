'use client'

import { HEADER_LINK } from '@/constants';
import { Button } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './Header.module.scss';

export function Header() {
    const pathname = usePathname()

    return (
        <header className={s.header}>
            {
                HEADER_LINK.map(link => <Button
                    component={Link}
                    key={link.title}
                    href={link.href}
                    variant={pathname === link.href ? 'light' : 'field'}
                >
                    {link.title}
                </Button>)
            }
        </header >
    );
}