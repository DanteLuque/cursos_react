import { useState } from "react"

export const useForm = (initialForm = {} ) => {
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value // [name] es una forma de acceder a las propiedades del objeto, en este caso username o password, dependiendo de cual se haya modificado.
            // [name]: value es lo mismo que username: value o password: value, pero de forma dinámica.
        })
    }

    return {
        ...formState,
        onInputChange,
    }
}
