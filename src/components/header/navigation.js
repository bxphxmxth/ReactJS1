import React from 'react';
import './navigation.css'

class Navigation extends React.Component {


     navigation= (destination) =>{
          console.log("il y a eu un clic " + destination);
     }

     render(){
          return (
               <nav>
                    <button onClick={ () => this.navigation("accueil")}>Accueil</button>
                    <button onClick={ () => this.navigation("heure")}>Heure</button>
                    <button onClick={() =>this.navigation("configuration") }>Configuration</button>

               </nav>
          )
     }
}


export default Navigation