import { useState } from 'react'

export const Counter = ({ value }) => {
    /*
    function handleClick(event, saludo) {
        console.log(event)
        console.log(saludo)
    }
    */
    const [contador, setContador] = useState(value)
    const aumentar = ()=>{
        setContador(contador+1);
    }

    return (
        <>
            <h1>Contador</h1>
            <p>{contador}</p>
            <button
                //onClick={handleClick} // forma 1: si solo tiene un argumento 
                // onClick={(event) => handleClick(event, "hola a todos", value)} // forma 2: si tiene mas de un argumento 
                onClick={aumentar}
            >soy un boton
            </button>
        </>
    )
}