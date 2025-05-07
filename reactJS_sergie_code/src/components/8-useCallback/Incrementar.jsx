import React from 'react'

// React.memo es una funcion que memoriza un componente, es decir, que no se vuelve a renderizar si sus props no cambian. Esto es util para evitar renderizados innecesarios de componentes hijos que dependen de esas props.

//useMemo memoriza el resultado de una funcion y React.memo memoriza un componente. Ambos son utiles para optimizar el rendimiento de una aplicacion React.

export const Incrementar = React.memo(
    ({incrementar}) => {
        return (
            <button onClick={()=> incrementar(5)}>+1</button>
        )
    }
)
