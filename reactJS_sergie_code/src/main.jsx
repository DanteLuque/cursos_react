import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
//import { FirstComponent } from './components/1.-exampleComponent/FirstComponent'
//import { SecondComponent } from './components/2.-Props/SecondComponent'
//import { Counter } from './components/3.-useState/Counter'
//import { ListadoApp } from './components/ListadoApp/ListadoApp'
//import { UsersApp } from './components/4.-useEffect/UsersApp'
//import { UsersApp } from './components/5.-custom_hooks/UsersApp'
//import { HooksApp } from './components/HooksApp/HooksApp'
import { FormularioComponent } from './components/6.-useRef/FormularioComponent'
import { CalculosPesados } from './components/7.-useMemo/CalculosPesados'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FirstComponent /> */}
    {/* <SecondComponent titulo="Sección de props" prop1="soy uno" prop2="soy dos" prop3="soy tres" propNumerico={100}/> */}
    {/* <Counter value={0} />*/}
    {/* <ListadoApp />*/}
    {/* <UsersApp /> */}
    {/* <HooksApp /> */}
    {/* <FormularioComponent /> */}
    <CalculosPesados />
  </StrictMode>
)
