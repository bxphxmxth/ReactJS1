import React from 'react';
import './navigation.css'

class Navigation extends React.Component {


     monAction= () =>{
          console.log("il y a eu un clic");
     }

     render(){
          return (
               <nav>
                    <button onClick={this.monAction}>Accueil</button>
                    <button>Heure</button>
                    <button>Configuration</button>

               </nav>
          )
     }
}


export default Navigation