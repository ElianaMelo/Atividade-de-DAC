import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';
import axios from 'axios';
import Card from "../../components/Card";
import FormGroup from '../../components/FormGroup';

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
    ).then(response => {
      console.log(response);
    }
    ).catch(error => {
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
      <div className='conteiner'>
        <div className='row'>
          <div className='col-md-6' style={this.style.colMd6}>
            <div className='bs-docs-section'>
              <Card title='Cadastrar Bordados'>
                <FormGroup className label="Nome do Bordado: " htmlFor="nomeBordado">
                    <input type="text" className="form-control" placeholder="nomeBordado" id="nomeBordado"
                      value={this.state.nomeBordado} onChange={(e) => { this.setState({ nomeBordado: e.target.value }) }} />
                </FormGroup>
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
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  style = {
    colMd6: {
      position: 'relative',
      left: '300px',
      top: '40px'

    }
  }
}