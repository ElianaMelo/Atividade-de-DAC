import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';
import { withRouter } from "react-router-dom";
import Card from '../../components/Card';

class TelaHome extends React.Component {

    render() {
        return (
            <div className='conteiner'>
                <div className='row'>
                    <div className='col-md-6' style={this.style.colMd6}>
                        <div className='bs-docs-section'>
                            <Card title='Projeto JF Bordados'>
                                <div className="card text-white bg-primary mb-3" style={this.style.width}>
                                    <div className="card-header"></div>
                                    <div className="card-body">
                                        <h4 className="card-title">JF Fardamentos e Bordados</h4>
                                        <p className="card-text">Temos diverças possibilidades de Fardamentos,
                                            da Estampa para o Bordado, aqui você sai Fardado(a) do seu jeito e com qualidade. </p>
                                    </div>
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

export default withRouter(TelaHome);