import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';
import axios from 'axios';
import Card from "../../components/Card";
import FormGroup from '../../components/FormGroup';

export default class DeleteLine extends React.Component {

    state = {
        idLinha: ''
    }

    update = async () => {
        await axios.delete(`http://localhost:8080/projetobordado/linha/${this.state.idLinha}`,
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
            <div className='conteiner'>
                <div className='row'>
                    <div className='col-md-6' style={this.style.colMd6}>
                        <div className='bs-docs-section'>
                            <Card title='Excluir Linha'>
                                <FormGroup label='Id da Linha:' htmlFor='idLinha'>
                                    <input type='text' className='form-control' id='idLinha'
                                     placeholder='Digite o id da Linha' value={this.state.idLinha} 
                                     onChange={(e) => this.setState({ idLinha: e.target.value })} />
                                </FormGroup>
                                <br />
                                <button type="button" className="btn btn-success" onClick={this.update}>Excluir</button>
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

