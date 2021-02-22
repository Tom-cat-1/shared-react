import logo from './logo.svg';
import './App.css';
import { React,  Component }  from "react";
import Name from "./X.js";
import SurName from "./Y.js";

class App  extends Component {
  render(){
  return (
    <div>
    <h1>hi</h1>
      Hello 
      <Name value="Sourav"></Name> 
      <SurName />
    </div>
  );
  }
}

export default App;
