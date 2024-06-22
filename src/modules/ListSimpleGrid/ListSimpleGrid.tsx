import { SimpleGrid } from "@mantine/core";

export function ListSimpleGrid({ children }: { children: React.ReactNode }) {
    return (
        <SimpleGrid
            cols={{ xs: 2, sm: 3, lg: 4 }}>
            {children}
        </SimpleGrid>
    );
}