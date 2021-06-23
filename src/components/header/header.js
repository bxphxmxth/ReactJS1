import React from "react";
import DemoComponent from "../demoComponent"
// import logo from "./logo.svg";
import Navigation from "./navigation";
import DisplayTime from "./displayTime";

class Header extends React.Component{

     currentPage = "heure";

     onNavigationParent = (destination) =>{
          this.currentPage = destination;
          console.log(this.currentPage);
     }

     handleClick = (format) =>{
          console.log(format)
     }


     
     render(){

           let pageContent;
           if(this.currentPage == "accueil"){
               pageContent = <DemoComponent/>
          }else{
               pageContent = <DisplayTime/>
          }
          return(
               
               <header className="App-header">
               <Navigation onNavigation={this.onNavigationParent}/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p> Logo </p>
        {this.currentPage}
        {pageContent}
        <div>
             {/* <DisplayTime format="phpTime"/> */}
             <button onClick={() => this.handleClick("jsTime")}>Javascript</button>
             <button onClick={() => this.handleClick("phpTime")}>PHP</button>
             <button onClick={() => this.handleClick("humainTime")}>Humain</button>
        </div>
        
        
        
      </header>
          )
     }
}

export default Header;