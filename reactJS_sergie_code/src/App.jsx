import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { HomeScreen } from './routes/HomeScreen'
import { AboutScreen } from './routes/AboutScreen'
import { ContactScreen } from './routes/ContactScreen'
import { UsuarioProvider } from './context/UsuarioProvider'
import { RegisterScreen } from './routes/RegisterScreen'

export const App = () => {
    return (
        <>
            <UsuarioProvider>
                <NavBar />
                <Routes>
                    <Route path='/' element={<HomeScreen />} />
                    <Route path='/register' element={<RegisterScreen />} />
                    <Route path='/about' element={<AboutScreen />} />
                    <Route path='/contact' element={<ContactScreen />} />
                    <Route path='/*' element={<Navigate to='/' />} />
                </Routes>
            </UsuarioProvider>
        </>
    )
}
