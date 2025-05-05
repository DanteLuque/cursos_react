import { useState } from 'react'
import { UserList } from './userList'

export const UsersApp = () => {
    const [endpoint, setEndpoint] = useState('users')

    const handleFetch = () => {
        endpoint === 'users' ? setEndpoint('posts') : setEndpoint('users')
    }

    return (
        <>
            <h1>Resultado del llamado al endpoint {endpoint}</h1>
            <UserList endpoint={endpoint}/>
            <button onClick={handleFetch}>Cargar data {endpoint==='users' ? "posts": "users"}</button>
        </>
    )
}
