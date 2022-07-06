import React from "react";
import {Route, BrowserRouter} from "react-router-dom";

import TelaHome from "../screens/home/TelaHome";
import TelaCadastroBordados from "../screens/registerEmbroidery/TelaCadastroBordados";
import TelaCadastroLinha from "../screens/registerLine/TelaCadastroLinha";
import TelaBordadoSalvo from "../screens/getEmbroidey/TelaBordadoSalvo";

import ViewLines from "../screens/getLine/ViewLines";
import UpdateLine from "../screens/updateLine/UpdateLine";
import DeleteLine from "../screens/deleteLine/DeleteLine";
import Login from "../screens/login/Login";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Route component={TelaHome} path="/"exact/>
            <Route component={TelaCadastroBordados} path="/TelaCadastroBordados"/>
            <Route component={TelaBordadoSalvo} path="/TelaBordadoSalvo"/>
            <Route component={TelaCadastroLinha} path="/TelaCadastroLinha"/>
            <Route component={UpdateLine} path="/UpdateLine"/>
            <Route component={DeleteLine} path="/DeleteLine"/>
            <Route component={ViewLines} path="/ViewLines"/>
            <Route component={Login} path="/Login"/>
        </BrowserRouter>
    )
}

export default AppRoutes;