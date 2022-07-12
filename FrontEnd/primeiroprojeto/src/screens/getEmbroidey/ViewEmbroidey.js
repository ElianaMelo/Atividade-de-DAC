import React from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import Card from "../../components/Card";
import FormGroup from '../../components/FormGroup';
import EmbroideyTable from '../../components/EmbroideyTable';

class ViewEmbroidey extends React.Component{

    state = {
        idBordado:'',
        nome:'',
        linhas:{
            idLinha: '',
            nomeCor:'',
            codigoCor: ''
        }

    }

    find = () => {
        var params = '?';

        if (this.state.idBordado !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }
            params = `${params}idBordado=${this.state.idBordado}`;

        }

        if (this.state.nome !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }
            params = `${params}nome=${this.state.nome}`;

        }

        axios.get(`http://localhost:8080/projetobordado/bordado/${params}`)
            .then(response => {
                let embroideys = response.data;
                this.setState({ embroideys });
                console.log(embroideys);
            }).catch(error => {
                console.log(error.response);
            });
    }

    delete = (idBordado) => {
        axios.delete(`http://localhost:8080/projetobordado/bordado/${idBordado}`
        ).then(response => {
            this.find();
        }
        ).catch(error => {
            console.log(error.response);
        }
        )
    }

    edit = () => {
        this.props.history.push('/UpdateLine');//UpdateEmbroidey
    }

    render() {
        return (
            <div className='conteiner'>
                <div className='row'>
                    <div className='col-md-6' style={this.style.colMd6}>
                        <div className='bs-docs-section'>
                            <Card title="Consultar Bordados">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="bs-component">
                                            <FormGroup className label="Id: *" htmlFor="idBordado">
                                                <input type="text" className="form-control" placeholder="Id do bordado" id="idBordado"
                                                    value={this.state.idBordado} onChange={(e) => { this.setState({ idBordado: e.target.value }) }} />
                                            </FormGroup>
                                            <br />
                                            <FormGroup className label="Nome do bordado: *" htmlFor="nome">
                                                <input type="text" className="form-control" placeholder="Nome do bordado"
                                                    id="nome"
                                                    value={this.state.nome} onChange={(e) => { this.setState({ nome: e.target.value }) }} />
                                            </FormGroup>
                                            <br />
                                            <button onClick={this.find}
                                                type="button"
                                                className='btn btn-success'>
                                                <i className='pi pi-search'></i> Buscar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='bs-component'>
                                            <EmbroideyTable lines={this.state.embroideys}
                                                delete={this.delete}
                                                edit={this.edit} />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div >
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

export default withRouter(ViewEmbroidey);