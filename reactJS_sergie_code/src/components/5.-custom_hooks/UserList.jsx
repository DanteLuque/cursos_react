import { useFetchData } from './hooks/useFetchUsers'


export const UserList = ({ endpoint }) => {
    const {data, isLoading} = useFetchData(endpoint);
    return (
        <ul>
            {
                isLoading ? <p>Cargando...</p> : 
                endpoint === 'users' ?
                    data.map(user => <li key={user.id}>usuario: {user.name}</li>) :
                    data.map(post => <li key={post.id}>post: {post.title}</li>)
            }
        </ul>
    )
}
