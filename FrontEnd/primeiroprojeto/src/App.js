import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';
import './App.css';
import Login from './screens/Login';

export default class App extends React.Component{
  
  render(){
    return(
      <div>
        <Login />
      </div>
    )
  }
}

