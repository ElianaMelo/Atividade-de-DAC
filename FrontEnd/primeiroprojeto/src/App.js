import React from 'react';
/*import logo from './logo.svg';
*/
import './App.css';



export default class App extends React.Component{

    state = {
      nomeCor: '',
      codigoCor: ''
    }
  
    show = () =>{
      console.log(this.state.nomeCor)
      console.log(this.state.codigoCor)
    }
  
  render(){
    return(
      <div>
      <label>nomeCor:</label>
      <input type="text" value={this.state.nomeCor} onChange={(e) => {this.setState({nomeCor: e.target.value})}}/>
  
      <br/>
      <label>codigoCor:</label>
      <input type="text" value={this.state.codigoCor} onChange={(e) => {this.setState({codigoCor: e.target.value})}}/>
  
      <br/>
      <button onClick={this.show}>mostrar</button>
      
      </div>
    )
  }
}

