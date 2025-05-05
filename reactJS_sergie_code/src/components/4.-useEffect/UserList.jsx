import { useState, useEffect } from 'react'


export const UserList = ({ endpoint }) => {
    const [data, setData] = useState([])

    const fetchUsers = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
            const dataApi = await response.json()
            setData(dataApi)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [endpoint]) // [] son las dependencias, si no se pasan, el useEffect se ejecuta una sola vez al cargar el componente. Si se pasan, el useEffect se ejecuta cada vez que cambian las dependencias.


    return (
        <ul>
            {
                endpoint === 'users' ?
                    data.map(user => <li key={user.id}>usuario: {user.name}</li>) :
                    data.map(post => <li key={post.id}>post: {post.title}</li>)
            }
        </ul>
    )
}
