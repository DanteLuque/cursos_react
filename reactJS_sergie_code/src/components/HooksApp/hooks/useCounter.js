import { useState } from 'react'

export const useCounter = (value = 0) => {
    const [contador, setContador] = useState(value)

    const incrementar = (v = 1) => {
        setContador(contador + v)
    }

    const decrementar = (v = 1) => {
        if(contador < 1) return
        setContador(contador - v)
    }

    const resetear = () => {
        setContador(0)
    }

    return {
        contador,
        incrementar,
        decrementar,
        resetear
    }
}
