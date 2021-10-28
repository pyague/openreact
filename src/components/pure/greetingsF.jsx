/*Esto son los componentes funcionales*/

import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Greetingsf = (props) => {

//Breve introducción a useState
const [age, setAge] = useState(29)

const birthday =()=>{
    setAge(age +1)
}


return (
        <div>
        <h1>
            ¡Hola {props.name} desde componente funcional!
        </h1>
        <h2>
            Tu edad es de: {age}
        </h2>
        <div>
            <button onClick={birthday}> {/* Asi cada vez que pulse se ejecuta la función*/}
                Cumplir años
            </button>
        </div>
    </div>
    );
};


Greetingsf.propTypes = {
    name: PropTypes.string,
};


export default Greetingsf;
