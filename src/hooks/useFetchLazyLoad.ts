import axios from "axios";
import { useEffect, useState } from "react"

export const useFetchLazyLoad = (query: string) => {
    const [resPosts, setResPosts] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [totalCount, setTotalCount] = useState(0)
    const [error, setError] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(true)

            axios.get(`${process.env.NEXT_PUBLIC_API}posts?${query}`)
                .then(res => {
                    setTotalCount(res.headers['x-total-count'])
                    setResPosts(res.data)
                })
                .catch(error => setError(error))
                .finally(() => setIsLoading(false))
        }, 1000);

        return () => clearTimeout(timeout)
    }, [query])

    return {
        resPosts,
        isLoading,
        totalCount,
        error
    }
}