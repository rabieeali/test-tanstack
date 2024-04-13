import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useAddUserMutation = () => {
    const fetcher = async (firstName: string) => {
        const { data } = await axios.post("https://jsonplaceholder.typicode.com/users", firstName)
        return data
    }

    const mutate = useMutation({
        mutationFn: fetcher,
        mutationKey: ['https://jsonplaceholder.typicode.com/users']
    })
    return mutate
}