import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';

export default class App extends React.Component{

    state = {
      nomeCor: '',
      codigoCor: '',
      result: ''
    }
  
    show = () =>{
      var result = this.state.nomeCor + ' - '+ this.state.codigoCor;
      console.log(this.state.nomeCor);
      console.log(this.state.codigoCor);
      
      this.setState({result});
    }
  
  render(){
    return(
      <div>
            
        <div className="form-group">
          <label className="col-form-label mt-4" htmlFor="nomeCor">Nome da Cor:</label>
          <input type="text" className="form-control" placeholder="nomeCor" id="nomeCor"
           value={this.state.nomeCor} onChange={(e) =>
            {this.setState({nomeCor: e.target.value})}}/>
        </div>
  
        <br/>
        <div className="form-group">
          <label className="col-form-label mt-4" htmlFor="codigoCor">Codigo da Cor:</label>
          <input type="text" className="form-control" placeholder="codigoCor" id="codigoCor"
            value={this.state.codigoCor} onChange={(e) =>
             {this.setState({codigoCor: e.target.value})}}/>
        </div>
  
        <br/>
        <button type="button" className="btn btn-success" onClick={this.show}>Show</button>

        <br/>
        <div className="form-group">
          <fieldset disabled="">
            <input className="form-control" id="disabledInput" type="text"
            placeholder="Disabled input here..." disabled="" defaultValue={this.state.result}/>
          </fieldset>
        </div>

      </div>
    )
  }
}

