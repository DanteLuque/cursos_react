import { useState } from "react";
import './ListadoApp.css'
import { AgregarTarea } from "./AgregarTarea";

const Item = ({ nombre, estaHecho }) => {
    return (
        <li className={estaHecho ? "task taskDone" : "task"}>{nombre}
            {
                // estaHecho ? '✅': '⏹️' //operador ternario
                estaHecho && '✅' //en react se puede usar && para mostrar un elemento si es true
            }
        </li>
    )
}


export const ListadoApp = () => {
    let listado = [
        { key: 1, nombre: "boton para incrementar", estaHecho: true },
        { key: 2, nombre: "todoList con react", estaHecho: true },
        { key: 3, nombre: "crud con react y express", estaHecho: false },
        { key: 4, nombre: "implementación SOLID", estaHecho: true },
        { key: 5, nombre: "arquitectura limpia", estaHecho: false }
    ]

    const [items, setItems] = useState(listado);

    const OnAgregarTarea = (value) => {
        if (value.trim().length === 0) return
        const newItem = {
            key: items.length + 1,
            nombre: value,
            estaHecho: false
        }
        setItems([...items, newItem])
    }

    //comunicación entre componentes: el componente padre (ListadoApp) le pasa una función al componente hijo (AgregarTarea) para que el hijo pueda llamar a la función del padre y modificar su estado. En este caso, el padre le pasa la función OnAgregarTarea al hijo AgregarTarea, y el hijo la llama cuando se envía el formulario.
    return (
        <>
            <h1>Listado de temas del curso</h1>
            <AgregarTarea addTask={OnAgregarTarea}/>
            <ol>
                {items.map(item =>
                    <Item key={item.key} nombre={item.nombre} estaHecho={item.estaHecho} />
                    //el key es necesario para que react pueda identificar cada elemento de la lista y no vuelva a renderizar toda la lista al cambiar un elemento
                )}
            </ol>
        </>
    )
}
