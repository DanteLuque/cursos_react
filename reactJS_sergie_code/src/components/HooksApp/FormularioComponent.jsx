import { useForm } from "./hooks/useForm"

export const FormularioComponent = () => {
    const initialForm = {
        username: '',
        password: ''
    }

    const { username, password, onInputChange } = useForm(initialForm)

    const obSubmit = (event) => {
        event.preventDefault() 
        console.log(username, password);
    }

    return (
        <form onSubmit={obSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input 
                type="text" 
                className="form-control" 
                id="username" 
                name= "username"
                value = {username}
                onChange={onInputChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="password"
                name= "password"
                value = {password}
                onChange={onInputChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
