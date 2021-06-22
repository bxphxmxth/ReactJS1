import { div } from 'prelude-ls';
import React from 'react';
import DemoComponent from "../demoComponent"


class DisplayTime extends React.Component {

     currentPage = "heure";

     render() {
          let dateCourante = new Date();
          let tempsJavaScript = dateCourante.getTime();
          let tempsPHP = tempsJavaScript/1000;

          return(
               <div>
                    <p>
                         Temps JS : {tempsJavaScript} millisecondes
                    </p>
                    <p>
                         temps PHP : {tempsPHP} secondes

                    </p>
                    <p>
                         date humain : {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}
                    </p>
               </div>
          )
     }
}

export default DisplayTime;
