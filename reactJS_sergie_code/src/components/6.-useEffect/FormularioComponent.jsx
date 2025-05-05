import { useEffect, useRef } from "react";
import { useForm } from "./hooks/useForm"

export const FormularioComponent = () => {

    // useRef es un hook que permite crear una referencia mutable que persiste durante el ciclo de vida del componente. Se utiliza para acceder a elementos del DOM o almacenar valores mutables sin causar una nueva renderización del componente.
    const focusRef = useRef();
    console.log(focusRef);

    const initialForm = {
        username: '',
        password: ''
    }

    const { username, password, onInputChange } = useForm(initialForm)

    const obSubmit = (event) => {
        event.preventDefault()
        console.log(username, password);
    }

    useEffect(() => {
        focusRef.current.focus()
    }, [])

    return (
        <form onSubmit={obSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                    ref={focusRef}
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={username}
                    onChange={onInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onInputChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
