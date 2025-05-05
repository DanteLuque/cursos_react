import './FirstComponent.css';

const mensaje = "Hola Mundo desde el primer componente";
const experiencia = ["Java", 10, true];
const persona = {
    nombre: "Dante",
    edad: 23,
    genero: "M",
    isSenior: true
}
const parseGenero = (genero) => { genero === "M" ? "Masculino" : "Femenino" }
const fechNacimiento = new Date(2002, 3, 15);

// Los componentes son funciones que devuelven un elemento de React, el cual es un objeto que describe lo que se va a mostrar en la pantalla.
export const FirstComponent = () => {
    return (
        <>
            <h1 className='tituloFirstComponent'>{mensaje}</h1>
            <p>Hola, mi nombre es {persona.nombre}, tengo {persona.edad} años</p>
            <ul>
                <li>Genero: {parseGenero(persona.genero)}</li>
                <li>Fecha de nacimiento: {fechNacimiento.toLocaleDateString()}</li>
                <ul>
                    <h5>Experiencia:</h5>
                    <li>Lenguaje: {experiencia[0]}</li>
                    <li>Años: {experiencia[1]}</li>
                    <li>Es senior: {experiencia[2] ? "Si" : "No"}</li>
                </ul>
            </ul>
        </>
    )
}
