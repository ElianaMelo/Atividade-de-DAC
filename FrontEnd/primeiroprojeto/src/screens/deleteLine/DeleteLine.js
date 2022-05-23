import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';
import axios from 'axios';

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
            <div>
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor="idLinha">Id da Linha:</label>
                    <input type="text" className="form-control" placeholder="idLinha" id="idLinha"
                        value={this.state.idLinha} onChange={(e) => { this.setState({ idLinha: e.target.value }) }} />
                </div>

                <br />
                <button type="button" className="btn btn-success" onClick={this.update}>Update</button>

            </div>
        )
    }
}

