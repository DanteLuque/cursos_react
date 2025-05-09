import { useForm } from '../hooks/useForm';
import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

export const RegisterScreen = () => {
    
    const initialForm = {
        nombre: '',
        tecnologia: '',
        email: ''
    }

    const {nombre, tecnologia, email, formState, onInputChange } = useForm(initialForm);
    const { setUsuario } = useContext(UsuarioContext);

    const onSubmit = (e)=>{
        e.preventDefault();
        setUsuario(formState);
    }

    return (
        <>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Nombre" className="form-label">nombre</label>
                        <input
                            type="nombre"
                            className="form-control"
                            id="nombre"
                            name="nombre" 
                            value={nombre} 
                            onChange={onInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tecnologia" className="form-label">tecnologia</label>
                        <input
                            type="tecnologia"
                            className="form-control"
                            id="tecnologia"
                            name="tecnologia" 
                            value={tecnologia} 
                            onChange={onInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email" 
                            value={email} 
                            onChange={onInputChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Registrar usuario</button>
                </form>
            </div>
        </>
    )
}
