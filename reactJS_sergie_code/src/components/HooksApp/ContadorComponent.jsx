import { useCounter } from "./hooks/useCounter";

export const ContadorComponent = () => {
    const {contador, incrementar, decrementar, resetear} = useCounter(0);

    return (
        <>
            <h1>Contador: {contador}</h1>
            <button className="btn btn-primary m-1" onClick={()=> incrementar(1)}>+1</button>
            <button className="btn btn-danger m-1" onClick={()=> resetear()}>Reset</button>
            <button className="btn btn-primary m-1" onClick={()=> decrementar(1)}>-1</button>
        </>
    )
}
