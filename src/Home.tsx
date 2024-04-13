import { useGetTodosQuery } from "./useGetTodosQuery"
import { useFetchQuery } from './useFetchQuery'
import { FormEvent, useRef, useState } from "react"
import axios from "axios"
import { useAddUserMutation } from "./useAddUserMutation"

const url_1 = "https://jsonplaceholder.typicode.com/todos?_limit=10"
const url_2 = "https://jsonplaceholder.typicode.com/users"

export default function Home() {


    const { mutate } = useAddUserMutation()
    // const { data: todoData, isLoading: todoIsLoading, error: todoError}  = useFetchQuery(url_2)
    // console.log( todoData, todoIsLoading, todoError )  
    const inputRef = useRef<HTMLInputElement>(null)

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        const inputText = inputRef.current?.value

        if (typeof inputText === 'string') {
            mutate(inputText)
        }

    }

    return (
        <div>
            <h1>home</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="">first name</label>
                <input ref={inputRef} type="text" placeholder="firstname" />
                <button>submit</button>
            </form>
        </div>

    )
}
