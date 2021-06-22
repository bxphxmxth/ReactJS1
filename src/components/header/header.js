import React from "react";
import DemoComponent from "../demoComponent"
// import logo from "./logo.svg";
import Navigation from "./navigation";
import DisplayTime from "./displayTime";

class Header extends React.Component{

     currentPage = "heure";


     
     render(){

           let pageContent;
           if(this.currentPage == "accueil"){
               pageContent = <DemoComponent/>
          }else{
               pageContent = <DisplayTime/>
          }
          return(
               
               <header className="App-header">
               <Navigation />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p> Logo </p>
        {this.currentPage}
        {pageContent}
        
        
        
      </header>
          )
     }
}

export default Header;