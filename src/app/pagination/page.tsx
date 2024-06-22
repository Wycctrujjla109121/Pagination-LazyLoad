import { PaginationList } from "@/modules";
import { ErrorMessage } from "@/modules/ErrorMessage";
import axios from "axios";
import qs from "qs";

const limit = 25

export default async function paginationPage({ searchParams }: any) {

    const qeryString = qs.stringify({
        _start: limit * (Number(searchParams?.page) - 1),
        _limit: limit
    })

    const resPosts = await axios.get(`${process.env.NEXT_PUBLIC_API}posts?${qeryString}`)
        .then(res => {
            return res
        })
        .catch(error => console.error(error))

    if (!resPosts) {
        return <ErrorMessage />
    }

    return (
        <main>
            <PaginationList posts={resPosts.data} limit={limit} totalCount={resPosts.headers['x-total-count']} />
        </main>
    );
}