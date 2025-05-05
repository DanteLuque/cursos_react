import { useMemo, useState } from "react"


// useMemo es un hook que memoriza el resultado de una funcion, para no volver a calcularlo si no ha cambiado la dependencia, en este caso la lista de numeros, esto evita que se vuelva a ejecutar el calculo cada vez que se renderiza el componente, solo se ejecuta cuando cambia la lista de numeros

export const CalculosPesados = () => {
    const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5])
    const [show, setShow] = useState(true)

    const getCalculo = (listNum) => useMemo(() => {
        return listNum.reduce((a, b) => a * b)
    }, [listNum])

    const agregarNumeros = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1])
        console.log(listaNumeros)
    }

    return (
        <>
            <h2>Calculo: </h2>
            <p>{getCalculo(listaNumeros)}</p>
            <button onClick={() => setShow(!show)}>
                {show ? 'Ocultar' : 'Mostrar'}
            </button>

            <button onClick={() => agregarNumeros()}>Agregar numeros</button>
        </>
    )
}
