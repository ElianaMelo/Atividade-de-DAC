import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';
import axios from 'axios';
import FormGroup from '../../components/FormGroup';

export default class TelaCadastroLinha extends React.Component{

    state = {
      nomeCor: '',
      codigoCor: '',
      result: ''
    }
  
    create = async () => {
      await axios.post('http://localhost:8080/projetobordado/linha',
        {
          nomeCor: this.state.nomeCor,
          codigoCor: this.state.codigoCor
        }
      ).then(response => 
        {
          console.log(response);
        }
      ).catch(error => 
        {
          console.log(error.response);
        }
      );
    }

  
  render(){
    return(
      <div>
        <FormGroup className label= "Nome da Cor: *"htmlFor="nomeCor">
          <input type="text" className="form-control" placeholder="nomeCor" id="nomeCor"
           value={this.state.nomeCor} onChange={(e) =>
            {this.setState({nomeCor: e.target.value})}}/>
        </FormGroup> 
        <br/>
        <FormGroup className label= "Codigo da Cor: *"htmlFor="codigoCor">
        <input type="text" className="form-control" placeholder="codigoCor" id="codigoCor"
           value={this.state.codigoCor} onChange={(e) =>
            {this.setState({codigoCor: e.target.value})}}/>
        </FormGroup>
  
        <br/>
        <button type="button" className="btn btn-success" onClick={this.create}>Create</button>

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

