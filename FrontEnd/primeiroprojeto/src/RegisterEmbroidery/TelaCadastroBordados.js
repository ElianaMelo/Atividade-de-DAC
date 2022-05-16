import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';

export default class TelaCadastroBordado extends React.Component {

  state = {
    nomeBordado: '',
    result: ''
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
            value={this.state.nomeBordado} onChange={(e) => 
            { this.setState({ nomeBordado: e.target.value }) }} />
        </div>

        <br />

        <button type="button" className="btn btn-success" onClick={this.show}>Show</button>

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