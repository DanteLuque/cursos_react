import { Incrementar } from "./Incrementar"
import {useCallback, useState } from "react"

// useCallback es un hook que devuelve una funcion memorizada, es decir, que no se vuelve a crear en cada renderizado del componente. Esto es util para evitar renderizados innecesarios de componentes hijos que dependen de esa funcion.
// En este caso, el componente Incrementar solo se vuelve a renderizar si la funcion incrementarPadre cambia.
// useCallback recibe dos argumentos: la funcion que queremos memorizar y un array de dependencias. Si el array de dependencias no cambia, la funcion no se vuelve a crear. Si el array de dependencias cambia, la funcion se vuelve a crear.

//En este caso, no es necesarios parar argumentos al useCallback, ya que no hay dependencias. Debido a que el setCounter no cambia, ya que es una funcion de React que no cambia entre renderizados. Por lo tanto, no es necesario pasarle el setCounter como dependencia.

export const CallbackComponent = () => {
    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback((value)=>{
        setCounter((c) => c + value)
    }, []);


    return (
        <>
            <h1>Contador: {counter}</h1>
            <Incrementar incrementar={incrementarPadre}/>
        </>
    )
}
