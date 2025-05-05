import { useFetch } from "./hooks/useFetch"

export const UsuariosComponent = () => {
    const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <>
            {
                isLoading ? <h1>Cargando...</h1> :
                errors ? <h1>Error: {errors}</h1> : 
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                                <th scope="col">website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(user => {
                                    return (
                                        <tr key={user.id}>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }
        </>
    )
}
