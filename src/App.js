import logo from './logo.svg';
import './App.css';
import DemoComponent from "./components/demoComponent";
import Footer from "./components/footer/footer";

function App() {

  let dateCourante = new Date();
  let tempsJavaScript = dateCourante.getTime();
  let tempsPHP = tempsJavaScript/1000

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DemoComponent/>
        
        <p>Temps JavaScript: {tempsJavaScript} en milliseconde</p>


        <p>Temps PHP: {tempsPHP} en milliseconde</p>

        <p>Date pour un humain: {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}</p>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
