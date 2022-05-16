import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';

import Card from '../Components/Card';

export default class TelaBordadoSalvo extends React.Component {

    render() {
        return (
            <div>
                <div className="card text-white bg-primary mb-3" style={this.style.width}>
                    <Card title='Fardamento do IFPB'>
                        <h4 className="card-title">Frente</h4>
                        <p className="card-text">Logo do IF:
                        <br/> Cores: Verde-2233, Vermelho -7655
                         </p>
                    </Card>
                </div>

                <div className="card text-white bg-primary mb-3" style={this.style.width}>
                    <Card title='Fardamento do IFPB'>
                        <h4 className="card-title">Costas</h4>
                        <p className="card-text">Site do IF:
                        <br/> Cores: Verde-2233, Vermelho -7655
                         </p>
                    </Card>
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