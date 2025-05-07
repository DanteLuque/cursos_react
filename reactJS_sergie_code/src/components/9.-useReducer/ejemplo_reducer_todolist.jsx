const initialState = [
    {
        id: 1,
        tarea: 'Hacer un todo List',
        finalizada: false
    },
    {
        id: 2,
        tarea: 'Practicar React',
        finalizada: false
    }
]

const newTask = {
    id: 3,
    tarea: 'Practicar Typescript',
    finalizada: false
}

const agregar = {
    type: '[TAREAS] Agregar',
    payload: newTask
}
const eliminar = {
    type: '[TAREAS] Eliminar',
    payload: 1
}
const modificar = {
    type: '[TAREAS] Modificar',
    payload: {
        id: 1,
        tarea: 'Hacer un todo List - modificado',
        finalizada: true
    }
}
const eliminarTodo = {
    type: '[TAREAS] Eliminar Todo',
    payload: null
}

const taskReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar':
            return [...state, action.payload]
        case '[TAREAS] Eliminar':
            return state.filter(task => task.id !== action.payload)
        case '[TAREAS] Modificar':
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        id: task.id,
                        tarea: action.payload.tarea,
                        finalizada: action.payload.finalizada ?? task.finalizada
                    }
                } else {
                    return task
                }
            })
        case '[TAREAS] Eliminar Todo':
            return []
        default:
            return state
    }
}

console.log(taskReducer(initialState, agregar));
