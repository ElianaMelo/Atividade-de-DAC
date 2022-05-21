import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';
import {withRouter} from "react-router-dom";

class TelaHome extends React.Component {

    render() {
        return (
            <div>
                <div className="card text-white bg-primary mb-3" style={this.style.width}>
                    <div className="card-header">Projeto JF Bordados</div>
                    <div className="card-body">
                        <h4 className="card-title">JF Fardamentos e Bordados</h4>
                        <p className="card-text">Temos diverças possibilidades de Fardamentos,
                        da Estampa para o Bordado, aqui você sai Fardado(a) do seu jeito e com qualidade. </p>
                    </div>
                </div>
            </div>
        )
    }

    style = {
        width: {
            position: 'relative',
            left: '10px'
        }
    }

}

export default withRouter(TelaHome);