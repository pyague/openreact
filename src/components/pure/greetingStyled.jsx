import React, {useState} from 'react';

// Definiendo estilos en constantes

//? Estilo para usuario logueado
const loggedStyle = {
    color: 'blue'
}

//? Estilo para usuario NO logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const Greetingstyled = (props) => {
    
    //Generamos un estado para el componente y asi controlar si el usuario está o no logueado
    const [logged, setLogged] = useState(false)
    

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            {logged ?
            //? Esto se podría guardar también en una variable
            (<h1>Hola,{props.name}</h1>)
            : (<p>Please login</p>)
            }    
            <button onClick={() =>{
                console.log('Botón pulsado')
                setLogged(!logged)
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default Greetingstyled;
