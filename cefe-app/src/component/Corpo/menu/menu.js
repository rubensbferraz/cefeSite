// @ts-nocheck
import React from 'react';
import Flexbox from 'flexbox-react';
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import './styleMenu.css';

const componentMenu = () => {
    return ( 
        <Flexbox className="menuContainer">
            <nav className="navbar  navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"   aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-icon-toggler"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/*<!--Primeiro Botão (CASA ESPÍRITA)-->*/}
                    <Nav className="barraMenu ">
                        <NavDropdown eventKey={1} title="Casa Espírita" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>Quem Somos</MenuItem>
                            <NavDropdown eventKey={2} title="Administração:" >
                                <MenuItem eventKey={2.1} >Gestão atual</MenuItem>
                                <MenuItem eventKey={2.2} >Gestão anterior</MenuItem>
                            </NavDropdown>
                            <MenuItem eventKey={1.2} >Quem é quem</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={2} title="Estudos">
                            {/*<!-- Segundo botão Estudo -->*/}
                            <MenuItem eventKey={2.1}>Cursos</MenuItem>
                            <MenuItem eventKey={2.2} >Oficinas</MenuItem>
                            <NavDropdown eventKey={3} title="Evangelização:" >
                                <MenuItem eventKey={3.1} >Infância</MenuItem>
                                <MenuItem eventKey={3.2} >Jovens</MenuItem>
                                <MenuItem eventKey={3.3} >Adultos</MenuItem>
                            </NavDropdown>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="Prática">
                            {/*<!-- Terceiro botão Estudo -->*/}
                            <NavDropdown eventKey={5} title="Campanhas:" >
                                <MenuItem eventKey={5.1} >CFAS - Campanhas de Fratenidade Auta de Souza</MenuItem>
                                <MenuItem eventKey={5.2} >CECX - Campanha de Esclarecimento Chico Xavier</MenuItem>
                                <MenuItem eventKey={5.3} >Jesus no lar</MenuItem>
                            </NavDropdown>
                            <MenuItem eventKey={4.1}>Mãos Limpas</MenuItem>
                            <NavDropdown eventKey={6} title="Atendimento:" >
                                <MenuItem eventKey={6.1} >Gestantes</MenuItem>
                                <MenuItem eventKey={6.2} >Assitidos</MenuItem>
                            </NavDropdown>
                            <MenuItem eventKey={4.2} >Grupo Mediúnico</MenuItem>
                            <MenuItem eventKey={4.3} >Aplicadores de Passes</MenuItem>
                            <MenuItem eventKey={4.4} >Bazar</MenuItem>
                            <MenuItem eventKey={4.5} >Eventos</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={7} title="Arte">
                            {/*<!-- Quarto botão Arte -->*/}
                            <NavDropdown eventKey={8} title="Corais:" >
                                <MenuItem eventKey={8.1} >Coral Infantil Amigos de Meimei</MenuItem>
                                <MenuItem eventKey={8.2} >Coral Espírita Fraternidade Emannuel</MenuItem>
                            </NavDropdown>
                            <MenuItem eventKey={7.1}>Teatro Espírita Mesas Gerantes</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={9} title="Contato">
                            {/*<!-- Quinto botão Contato -->*/}
                            <NavDropdown eventKey={10} title="Redes Sociais:" >
                                <MenuItem eventKey={10.1} >Facebook</MenuItem>
                                <MenuItem eventKey={10.2} >Twitter</MenuItem>
                                <MenuItem eventKey={10.3} >Instagram</MenuItem>
                            </NavDropdown>
                            <MenuItem eventKey={9.1}>Maiores Informações</MenuItem>
                        </NavDropdown>
                    </Nav>
                </div>
                    {/*<!--Fim do Menu container -->*/}
            </nav>
        </Flexbox>
    )
}

export default componentMenu
