import React from "react";

import NavBarItem from "./NavBarItem";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Bordados</a>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <NavBarItem href="/" label="Home"/>
                        <NavBarItem href="/TelaCadastroBordados" label="Cadastro de Bordado"/>
                        <NavBarItem href="/TelaBordadoSalvo" label="Bordado Salvo"/>
                        <NavBarItem href="/TelaCadastroLinha" label="Cadastro de Linhas"/>
                        <NavBarItem href="/UpdateLine" label="Atualizar Linhas"/>
                        <NavBarItem href="/DeleteLine" label="Escluir Linhas"/>
                        <NavBarItem href="/TelaLinhaSalva" label="Linha Salva"/>
                        <NavBarItem href="/Login" label="Login"/>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar;