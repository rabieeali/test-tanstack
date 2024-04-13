import { useQuery } from "@tanstack/react-query"

export const useFetchQuery = (url: string) => {
    async function fetcher() {
        const data = await fetch(url)
        return data.json()
    }
    const query = useQuery({
        queryKey: [url],
        queryFn: fetcher
    })
    return query
}