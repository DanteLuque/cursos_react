import React, { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext';

export const HomeScreen = () => {

    const { usuario } = useContext(UsuarioContext);

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">nombre</th>
                        <th scope="col">tecnologia</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.tecnologia}</td>
                        <td>{usuario.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
