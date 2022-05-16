import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';
import './App.css';
import Login from './screens/Login';
import NavBar from './Components/NavBar';
import TelaHome from './Home/TelaHome';

import AppRoutes from './main/AppRoutes';

export default class App extends React.Component{
  
  render(){
    return(
      <div>
        <NavBar/>
        <AppRoutes/>
      </div>
    )
  }
}

