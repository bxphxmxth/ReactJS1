import React from "react";
import DemoComponent from "../demoComponent"
// import logo from "./logo.svg";
import Navigation from "./navigation";

class Header extends React.Component{
     
     render(){

          let dateCourante = new Date();
           let tempsJavaScript = dateCourante.getTime();
           let tempsPHP = tempsJavaScript/1000
          return(
               <header className="App-header">
               <Navigation />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p> Logo </p>
        <DemoComponent/>
        
        <p>Temps JavaScript: {tempsJavaScript} en milliseconde</p>


        <p>Temps PHP: {tempsPHP} en milliseconde</p>

        <p>Date pour un humain: {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}</p>
      </header>
          )
     }
}

export default Header;