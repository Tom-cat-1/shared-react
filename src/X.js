import './App.css';
import { React,  Component }  from "react";

class Name  extends Component {
 constructor(props) {
  super(props);
  this.state = {
      surname : 'Datta'
  };
 }
  render(){
  return (
    <span>
      {this.props.value} {this.state.surname}
    </span>
  );
  }
}

export default Name;
