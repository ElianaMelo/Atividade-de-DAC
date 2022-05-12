import React from 'react';
/*import logo from './logo.svg';
*/
import './App.css';



export default class TelaCadastroBordado extends React.Component{

    state = {
      nomeBordado: ''
    }
  
    show = () =>{
      console.log(this.state.nomeBordado)
     
    }
  
  render(){
    return(
      <div>
      <label>nomeBordado:</label>
      <input type="text" value={this.state.nomeBordado} onChange={(e) => {this.setState({nomeBordado: e.target.value})}}/>
  
      <br/>
      <button onClick={this.show}>mostrar</button>
      
      </div>
    )
  }
}