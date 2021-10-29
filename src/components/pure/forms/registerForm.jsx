/*
 * Componente que va a contener un formulario para 
 * autentificación de usuarios
 */

import React, {useState} from 'react';

const Registerform = () => {
        
        const initialData = [
            {
                user:'',
                name:'',
                email:'',
                password:'',
            }
        ]
        
        const[data, setData] = useState(initialData)
    

    return (
        <div>
            
        </div>
    );
}

export default Registerform;
