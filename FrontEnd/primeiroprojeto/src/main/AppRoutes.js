import React from "react";
import {Route, BrowserRouter} from "react-router-dom";

import TelaHome from "../Home/TelaHome";
import TelaCadastroBordados from "../RegisterEmbroidery/TelaCadastroBordados";
import TelaCadastroLinha from "../RegisterLine/TelaCadastroLinha";
import TelaBordadoSalvo from "../GetEmbroidey/TelaBordadoSalvo";
import TelaLinhaSalva from "../GetLine/TelaLinhaSalva";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Route component={TelaHome} path="/"exact/>
            <Route component={TelaCadastroBordados} path="/TelaCadastroBordados"/>
            <Route component={TelaCadastroLinha} path="/TelaCadastroLinha"/>
            <Route component={TelaBordadoSalvo} path="/TelaBordadoSalvo"/>
            <Route component={TelaLinhaSalva} path="/TelaLinhaSalva"/>
        </BrowserRouter>
    )
}

export default AppRoutes;