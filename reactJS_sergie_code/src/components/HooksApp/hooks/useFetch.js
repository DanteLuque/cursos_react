import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState({
        data: null,
        isLoading: true,
        errors: null,
    })

    const getFetch = async () => {
        if (!url) return
        try {
            const response = await fetch(url)
            const data = await response.json()

            setData({
                data: data,
                isLoading: false,
                errors: null,
            })

        } catch (error) {
            setData({
                data: null,
                isLoading: false,
                errors: error,
            })
        }
    }

    useEffect(() => {
        getFetch()
    }, [url])

    return {
        ...data
    }
}
