import { Slider } from "@/modules/index.client";
import { Flex, Text } from "@mantine/core";
import axios from "axios";

export default async function Home() {
  const resPosts = await axios.get(`${process.env.NEXT_PUBLIC_API}posts?_start=0&_limit=10`)
    .then(res => res.data)
    .catch(error => console.error(error))

  if (!resPosts) {
    return <Flex align={'center'} justify={'center'}>
      <Text size="md">Sorry fetch failed, try again</Text>
    </Flex>
  }

  return (
    <main>
      Главная страница
      <Slider posts={resPosts} />
    </main>
  );
}
