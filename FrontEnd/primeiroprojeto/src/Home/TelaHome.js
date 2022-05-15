import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';
//import './App.css';



export default class TelaHome extends React.Component {

    state = {
        nomeBordado: '',
        result: ''
    }

    show = () => {

        var result = this.state.nomeBordado;
        console.log(this.state.nomeBordado)
        this.setState({ result });
    }

    render() {
        return (
            <div>
               
                

                <div className="card text-white bg-primary mb-3" style={this.style.width}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h4 className="card-title">Primary card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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