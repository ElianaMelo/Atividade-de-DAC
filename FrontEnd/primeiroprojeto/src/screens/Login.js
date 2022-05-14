import React from 'react';
import './Login.css';

import Card from '../Components/Card';
import FormGroup from '../Components/FormGroup';

export default class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    login = () => {
        console.log('email:', this.state.email);
        console.log('password:', this.state.password);

    }

    render() {
        return (
            <div className='conteiner'>
                <div className='row'>
                    <div className='col-md-6' style={this.style.colMd6}>
                        <div className='bs-docs-section'>
                            <Card title='Login'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='bs-component'>
                                            <fieldset>
                                                <FormGroup label='Email: *' htmlFor='inputEmail'>
                                                    <input type='email' className='form-control' id='inpultEmail'
                                                        area-aria-describedby='emailHelp' placeholder='Digite o email'
                                                        value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                                </FormGroup>
                                                <FormGroup label='Senha:*' htmlFor='inputPassword'>
                                                    <input type='password' className='form-control' id='inpultPessword'
                                                        placeholder='Digite a senha'
                                                        value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                                                </FormGroup>
                                                <button className='btn btn-success' onClick={this.login}>Logar</button>
                                                <button className='btn btn-danger'>Cadastrar</button>
                                            </fieldset>
                                        </div>
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
            left: '300px'

        }
    }

}