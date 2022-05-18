import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';

import Card from '../../components/Card';

export default class TelaLinhaSalva extends React.Component {

    render() {
        return (
            <div>
                <div className="card text-white bg-primary mb-3" style={this.style.width}>
                    <Card title='JF Fardamentos e Bordado'>
                        <h4 className="card-title">Marca: Alfa</h4>
                        <p className="card-text"> Verde-2233,
                        <br/> Vermelho -7655,
                        <br/> Amarelo - 4433,
                        <br/> Laranja - 6578
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