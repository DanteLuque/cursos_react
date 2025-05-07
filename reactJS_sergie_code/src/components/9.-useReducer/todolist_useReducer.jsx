import { useReducer } from "react"
import { useForm } from "./hooks/useForm"

const initialState = [
    {
        id: 1,
        tarea: 'Hacer un todo List',
        finalizada: false
    }
]

const taskReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar':
            return [...state, action.payload]
        case '[TAREAS] Eliminar':
            return state.filter(task => task.id !== action.payload)
        case '[TAREAS] finalizar':
            return state.map(task => {
                if (task.id === action.payload.id) {
                    const editTask = {
                        ...tarea,
                        finalizada: !task.finalizada
                    }
                    return editTask;
                }
                return task;
            })
        case '[TAREAS] Eliminar Todo':
            return []
        default:
            return state
    }
}

export const ListaTareas = () => {
    const [tareaListState, dispatch] = useReducer(taskReducer, initialState);
    const { tarea, onInputChange } = useForm({ tarea: '' })

    const agregar = (event) => {
        event.preventDefault();
        if (tarea.trim() === '') return
        const newTask = {
            id: new Date().getTime(),
            tarea: tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] Agregar',
            payload: newTask
        }
        dispatch(action);
    }

    const finalizar = (id) => {
        const action = {
            type: '[TAREAS] finalizar',
            payload: id
        }
        dispatch(action);
    }

    const borrar = (id) => {
        const action = {
            type: '[TAREAS] Eliminar',
            payload: id
        }
        dispatch(action);
    }

    const reset = () => {
        const action = {
            type: '[TAREAS] Eliminar Todo',
            payload: null
        }
        dispatch(action)
    }

    return (
        <>
            <form onSubmit={agregar}>
                <div className="mb-3">
                    <label htmlFor="tarea" className="form-label">tarea</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tarea"
                        name="tarea"
                        value={tarea}
                        onChange={onInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type='button' className="btn btn-primary" onClick={reset}>resetear</button>
            </form>

            <hr />

            <ul className="list-group">
                {
                    tareaListState.map((item) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between" key={item.id}>
                                <span>{item.tarea}</span>
                                <div>
                                    <input
                                        type="checkbox"
                                        value={item.finalizada}
                                        onChange={() => finalizar(item.id)} />
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => borrar(item.id)}
                                    >Borrar</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
