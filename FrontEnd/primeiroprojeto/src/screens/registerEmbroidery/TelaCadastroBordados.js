import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';
import axios from 'axios';

export default class TelaCadastroBordado extends React.Component {

  state = {
    nomeBordado: '',
    result: ''
  }

  create = async () => {
    await axios.post('http://localhost:8080/projetobordado/bordado',
      {
        nome: this.state.nomeBordado
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

  show = () => {
    var result = this.state.nomeBordado;
    console.log(this.state.nomeBordado)
    this.setState({ result });
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label className="col-form-label mt-4" htmlFor="nomeCor">Nome do Bordado:</label>
          <input type="text" className="form-control" placeholder="nomeCor" id="nomeCor"
            value={this.state.nomeBordado} onChange={(e) => { this.setState({ nomeBordado: e.target.value }) }} />
        </div>



        <br />
        <button type="button" className="btn btn-success" onClick={this.create}>Show</button>
        <br />
        <div className="form-group">
          <fieldset disabled="">
            <input className="form-control" id="disabledInput" type="text"
              placeholder="Disabled input here..." disabled=""
              defaultValue={this.state.result} />
          </fieldset>
        </div>
      </div>
    )
  }
}