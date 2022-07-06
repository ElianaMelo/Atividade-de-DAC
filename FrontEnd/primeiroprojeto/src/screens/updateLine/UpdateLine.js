import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';
import axios from 'axios';
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";

export default class UpdateLinha extends React.Component {

    state = {
        idLinha: '',
        nomeCor: '',
        codigoCor: '',
        result: ''
    }

    update = async () => {
        await axios.put(`http://localhost:8080/projetobordado/linha/${this.state.idLinha}`,
            {
                nomeCor: this.state.nomeCor,
                codigoCor: this.state.codigoCor
            }
        ).then(response => {
            console.log(response);
        }
        ).catch(error => {
            console.log(error.response);
        }
        );
    }

    render() {
        return (
            <div>
                <div className='conteiner'>
                    <div className='row'>
                        <div className='col-md-6' style={this.style.colMd6}>
                            <div className='bs-docs-section'>
                                <Card title='Atualizar'>
                                    <FormGroup label='Id da Linha:' htmlFor='idLinha'>
                                        <input type='text' className='form-control' id='idLinha'
                                            placeholder='Digite o id da linha' value={this.state.idLinha} onChange={(e) => this.setState({ idLinha: e.target.value })} />
                                    </FormGroup>
                                    <br />
                                    <FormGroup label='Nome da Cor:' htmlFor='nomeCor'>
                                        <input type='text' className='form-control' id='nomeCor'
                                            placeholder='Digite o nome da cor' value={this.state.nomeCor} onChange={(e) => this.setState({ nomeCor: e.target.value })} />
                                    </FormGroup>
                                    <br />
                                    <FormGroup label='Codigo da Cor:' htmlFor='codigoCor'>
                                        <input type='text' className='form-control' id='codigoCor'
                                            placeholder='Digite o codigo da cor' value={this.state.codigoCor} onChange={(e) => this.setState({ codigoCor: e.target.value })} />
                                    </FormGroup>
                                    <br/>
                                    <button type="button" className="btn btn-success" onClick={this.update}>Update</button>
                                </Card>
                            </div>
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

