import './SecondComponent.css'

// Los props son propiedades que se le pasan a un componente para que este pueda recibir información desde su padre.
export const SecondComponent = ({titulo, prop1, prop2, prop3, propNumerico}) => {

    return(
        <>
            <h1 className='tituloSecondComponent'>{titulo}</h1>
            <p>Hola, soy el segundo componente</p>
            <ul>
                <li>Propiedad 1: {prop1}</li>
                <li>Propiedad 2: {prop2}</li>
                <li>Propiedad 3: {prop3}</li>
                <li>Este es un numero: {propNumerico+50}</li>
            </ul>
        </>
    )
}
