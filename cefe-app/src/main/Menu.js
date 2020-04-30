import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './../components/menu/css/styleMenu.css' 

const casaEspirita = [
    {Diretoria:[
        { route: "/", label: "Home" },
        { route: "/quemSomos", label: "Quem Somos" },
        { route: "/quemEQuem", label: "Quem E Quem" }, 
        { route: "/gerenciando", label: "Gerenciando"},
        { route: "/gestaoAnterior", label: "Gestão Anterior" },
        { route: "/gestaoAtual", label: "Gestão Atual" },
    ]},
];
const estudos =[
    {Estudos:[
        { route: "/", label: "Home" },
        { route: "/cursos", label: "Cursos" },
        { route: "/oficinas", label: "Oficinas" },
        { route: "/infancia", label: "Infancia" },
        { route: "/jovens", label: "Jovens" },
        { route: "/adultos", label: "Adultos" },
    ]}
];

const pratica = [
    {Praticas: [
        { route: "/", label: "Home" },
        { route: "/aplicadoresPasses", label: "Aplicadores de Passe" },
        { route: "/bazar", label: "Bazar" },
        { route: "/eventos", label: "Eventos" },
        { route: "/grupoMediunico", label: "Grupo Mediúnico" },
        { route: "/maoLimpas", label: "Mãos Limpas" },
        { route: "/assistidos", label: "Assistidos" },
        { route: "/gestantes", label: "Gestantes" },
        { route: "/cecx", label: "CECX" },
        { route: "/cfas", label: "CFAS" },
        { route: "/jlar", label: "Jesus no Lar" },
    ]}
];
const arte = [{
    Arte: [
        { route: "/", label: "Home" },
        { route: "/temgirantes", label: "Teatro Mesas Girantes" },
        { route: "/cefe", label: "Coral CEFE" },
        { route: "/ciamimai", label: "Coral Amigos de Meimei" },
    ]
}];
const contato = [{
    Contatos: [
        { route: "/", label: "Home" },
        { route: "/faceBook", label: "FaceBook" },
        { route: "/Instagram", label: "Instagram" },
        { route: "/twitter", label: "Twitter" },
    ]
}];

export class Menu extends Component {
    render () {
        return (
            <div className="menuContainer">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    <button className="navbar-toggler" id="menuReduzido" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        {/*Item Menu Casa Espirita*/}
                            {casaEspirita.map((link, ce) => 
                            <li className="nav-item dropdown" key={ce}>
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Casa Espírita
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to={'/quemSomos'}>Quem Somos</Link>
                                    <Link className="dropdown-item" to={'/quemEQuem'}>Quem é quem</Link>
                                    <div className="dropdown-divider"></div>
                                    <div>
                                        <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Administracão
                                        </a>
                                        <Link className="dropdown-item" to={'/gerenciando'}>Gerenciando</Link>                                        
                                        <Link className="dropdown-item" to={'/gestaoAnterior'}>Gestão Anteror</Link>
                                        <Link className="dropdown-item" to={'/gestaoAtual'}>Gestão Atual</Link>
                                    </div>
                                </div>
                            </li>
                            )}
                            {/*Item Menu de Estudos*/}
                            {estudos.map((link, e) =>
                            <li className="nav-item dropdown" key={e}>
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Estudos
                            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to={'/cursos'}>Cursos</Link>
                                    <Link className="dropdown-item" to={'/oficinas'}>Oficinas</Link>
                                    <div className="dropdown-divider"></div>
                                    <div>
                                        <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Evangelização
                                    </a>
                                        <Link className="dropdown-item" to={'/infancia'}>Infancia</Link>
                                        <Link className="dropdown-item" to={'/jovens'}>Jovens</Link>
                                        <Link className="dropdown-item" to={'/adultos'}>Adultos</Link>
                                    </div>
                                </div>
                            </li>
                            )}
                            {/*Item Menu das Praticas*/}
                            {pratica.map((link, p) =>
                            <li className="nav-item dropdown" key={p}>
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Práticas
                                </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to={'/aplicadoresPasses'}>Aplicadores de Passes</Link>
                                <Link className="dropdown-item" to={'/bazar'}>Bazar</Link>
                                <Link className="dropdown-item" to={'/eventos'}>Eventos</Link>
                                <Link className="dropdown-item" to={'/grupoMediunico'}>Grupo Mediúnico</Link>
                                <Link className="dropdown-item" to={'/maoLimpas'}>Mãos Limpas</Link>
                                <div className="dropdown-divider"></div>
                                <div>
                                    <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Atendimento
                                    </a>
                                    <Link className="dropdown-item" to={'/assistidos'}>Infancia</Link>
                                    <Link className="dropdown-item" to={'/gestantes'}>Gestantes</Link>
                                </div>
                                <div>
                                    <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Campanhas
                                    </a>
                                    <Link className="dropdown-item" to={'/cecx'}>Campanha de Esclarecimento Chico Xavier</Link>

                                    <Link className="dropdown-item" to={'/cfas'}>Campanha de Fratenidade Auta de Souza</Link>
                                    <Link className="dropdown-item" to={'/jlar'}>Evangelho Jesus no Lar</Link>
                                </div>                
                            </div>
                            </li>
                            )}
                            {/*Item Menu Artes*/}
                            {arte.map((link, a) =>
                                <li className="nav-item dropdown" key={a}>
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Arte Espírita
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to={'/temgirantes'}>Teatro Mesas Girantes</Link>
                                        <div className="dropdown-divider"></div>
                                        <div>
                                            <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Corais
                                        </a>

                                            <Link className="dropdown-item" to={'/cefe'}>Coral Espírita Fraternidade Emannuel</Link>
                                            <Link className="dropdown-item" to={'/ciamimai'}>Coral Amigos de Meimei</Link>
                                        </div>
                                    </div>
                                </li>
                            )}  
                            {/*Item Menu Contatos*/}
                            {contato.map((link, c) =>
                                <li className="nav-item dropdown" key={c}>
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Contatos
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to={'/contato'}>Maiores Informações</Link>
                                        <div className="dropdown-divider"></div>
                                        <div>
                                            <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Redes Sociais
                                        </a>

                                            <Link className="dropdown-item" to={'/faceBook'}>FaceBook</Link>

                                            <Link className="dropdown-item" to={'/instagram'}>Instagram</Link>

                                            <Link className="dropdown-item" to={'/twitter'}>Twitter</Link>
                                        </div>
                                    </div>
                                </li>
                            )}                                               
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu;