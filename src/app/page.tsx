import { Slider } from "@/modules";
import { ErrorMessage } from "@/modules/ErrorMessage";
import axios from "axios";
import qs from "qs";

export default async function Home() {
  const qeryString = qs.stringify({
    _start: 0,
    _limit: 10
  })

  const resPosts = await axios.get(`${process.env.NEXT_PUBLIC_API}posts?${qeryString}`)
    .then(res => res.data)
    .catch(error => console.error(error))

  if (!resPosts) {
    return <ErrorMessage />
  }

  return (
    <main>
      <Slider posts={resPosts} />
    </main>
  );
}
