import React from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import Card from "../../components/Card";
import FormGroup from '../../components/FormGroup';
import LineTable from '../../components/LineTable';

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
                let Embroideys = response.data;
                this.setState({ Embroideys });
                console.log(Embroideys);
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
                            <Card title="Consultar Linhas">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="bs-component">
                                            <FormGroup className label="Id: *" htmlFor="lineId">
                                                <input type="text" className="form-control" placeholder="Id da linha" id="lineId"
                                                    value={this.state.lineId} onChange={(e) => { this.setState({ lineId: e.target.value }) }} />
                                            </FormGroup>
                                            <br />
                                            <FormGroup className label="Codigo da Cor: *" htmlFor="CodigoCor">
                                                <input type="text" className="form-control" placeholder="Codigo da linha"
                                                    id="CodigoCor"
                                                    value={this.state.codigoCor} onChange={(e) => { this.setState({ codigoCor: e.target.value }) }} />
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
                                            <LineTable lines={this.state.lines}
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