import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';
import axios from 'axios';

export default class App extends React.Component {

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

    show = () => {
        var result = this.state.nomeCor + ' - ' + this.state.codigoCor;
        console.log(this.state.nomeCor);
        console.log(this.state.codigoCor);

        this.setState({ result });
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor="idLinha">Id da Linha:</label>
                    <input type="text" className="form-control" placeholder="idLinha" id="idLinha"
                        value={this.state.idLinha} onChange={(e) => { this.setState({ idLinha: e.target.value }) }} />
                </div>

                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor="nomeCor">Nome da Cor:</label>
                    <input type="text" className="form-control" placeholder="nomeCor" id="nomeCor"
                        value={this.state.nomeCor} onChange={(e) => { this.setState({ nomeCor: e.target.value }) }} />
                </div>

                <br />
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor="codigoCor">Codigo da Cor:</label>
                    <input type="text" className="form-control" placeholder="codigoCor" id="codigoCor"
                        value={this.state.codigoCor} onChange={(e) => { this.setState({ codigoCor: e.target.value }) }} />
                </div>

                <br />
                <button type="button" className="btn btn-success" onClick={this.update}>Update</button>


            </div>
        )
    }
}

