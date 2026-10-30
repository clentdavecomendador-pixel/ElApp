import { useEffect, useState } from "react"

export const useFetch = <T, >(url: string) => {
    const [ apiData, setApiData ] = useState<T | null >(null)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState<string | null>(null)

    useEffect(() => {
        if (!url) {
            setApiData(null)
            setIsLoading(false)
            return
        }
        setIsLoading(true)
        setError(null)

        fetch(url, {cache: "no-store"})
        .then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            return response.json() as Promise<T>;
        })
        .then(data => setApiData(data))
        .catch((error: unknown) => {
            setError(error instanceof Error ? error.message : "An unexpected error occurred");
        })
        .finally(() => setIsLoading(false))
    }, [url])

    return { apiData, isLoading, error}
}