/*Esto es un componente de clase*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Greetings extends Component {
    
    
    constructor(props){
        super(props);
        this.state={
            age:29
        }
    }
    
    render() {
        return (
            <div>
                <h1>
                    ¡Hola {this.props.name}!
                </h1>
                <h2>
                    Tu edad es de: {this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}> {/* Asi cada vez que pulse se ejecuta la función*/}
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday =()=> {
        this.setState((prevState)=>(
            {
                age: prevState.age +1
            }
        ))
    }
}




Greetings.propTypes = {
    /*Aqui puedo especificar el tipo de props que mando*/
    name: PropTypes.string,
};


export default Greetings;
