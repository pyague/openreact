/*
 * Ejemplo de uso de método componentDidUpdate en componente de clase
 * y uso de hook en componente funcional
 */

 import React, { Component, useEffect } from 'react'

 export class DidUpdate extends Component {
 
     componentDidUpdate(){
         console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
     }
 
     render() {
         return (
             <div>
                 <h1>DidUpdate</h1>
             </div>
         )
     }
 }
 
 
 export const DidupdateHook = () => {
 
     useEffect(() => {
         console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
     }); //Al no tener cocrchetes se ejecuta todas las veces, cada vez que se renderiza, se actuliza, hay un nuevo props, cualquier cosa
 
     return (
         <div>
             <h1>DidUpdate</h1>
         </div>
     );
 }
 