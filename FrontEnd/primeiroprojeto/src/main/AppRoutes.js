import React from "react";
import {Route, BrowserRouter} from "react-router-dom";

import TelaHome from "../Home/TelaHome";
import TelaCadastroBordados from "../RegisterEmbroidery/TelaCadastroBordados";
import TelaCadastroLinha from "../RegisterLine/TelaCadastroLinha";
import TelaBordadoSalvo from "../GetEmbroidey/TelaBordadoSalvo";
import TelaLinhaSalva from "../GetLine/TelaLinhaSalva";
import Login from "../screens/Login";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Route component={TelaHome} path="/"exact/>
            <Route component={TelaCadastroBordados} path="/TelaCadastroBordados"/>
            <Route component={TelaCadastroLinha} path="/TelaCadastroLinha"/>
            <Route component={TelaBordadoSalvo} path="/TelaBordadoSalvo"/>
            <Route component={TelaLinhaSalva} path="/TelaLinhaSalva"/>
            <Route component={Login} path="/Login"/>
        </BrowserRouter>
    )
}

export default AppRoutes;