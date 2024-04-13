import { useQuery } from "@tanstack/react-query"

export const useGetTodosQuery = (url: string) => {

    const fetcher = async () => {
        const jRes = await fetch(url)
        return await jRes.json()
    }

    const query = useQuery({ queryKey: [url], queryFn: fetcher })
    return query
}