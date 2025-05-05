import { useEffect, useState } from "react"
import { fetchData } from "../helpers/fetchData";

export const useFetchData = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        const { data, isLoading } = await fetchData(endpoint);
        setData(data)
        setIsLoading(isLoading)
    }

    useEffect(() => {
        getData(); // Por dentro no puede ser async, pero por fuera si.
        /*
        //El useEffect no acepta funciones async, porque no devuelve una promesa, sino que devuelve undefined. Por eso se crea una funcion dentro del useEffect y se llama a esa funcion. Utilizando then y catch para manejar la promesa y retornar el resultado, mas no retornar la promesa en si.
        // En este caso, el useEffect se ejecuta cada vez que cambia el endpoint, por lo que se vuelve a llamar a la funcion fetchData y se actualiza el estado de data y isLoading.
        fetchData(endpoint)
            .then((response) => {
                setData(response.data)
                setIsLoading(response.isLoading)
            }).catch((error) => {
                console.error('Error:', error)
                setIsLoading(false)
            })
        */
    }, [endpoint])

    return {
        data,
        isLoading
    }
}