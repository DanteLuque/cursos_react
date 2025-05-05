import { useState } from 'react'
import { UserList } from './userList'

export const UsersApp = () => {
    const [endpoint, setEndpoint] = useState('users')

    const handleFetch = () => {
        endpoint === 'users' ? setEndpoint('posts') : setEndpoint('users')
    }

    return (
        <>
            <h1>Lista de usuarios</h1>
            <UserList endpoint={endpoint}/>
            <button onClick={handleFetch}>Cargar usuarios</button>
        </>
    )
}
