'use client'

import { Button, Flex, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

export function ErrorMessage() {
    const router = useRouter()
    return (
        <Flex align={'center'} direction={'column'} justify={'center'} rowGap={10}>
            <Text size="md">Sorry fetch failed, try again</Text>
            <Button onClick={() => router.refresh()}>Refresh</Button>
        </Flex>
    );
}