import React, {Component} from 'react';
import axios from 'axios';
// @ts-ignore
import logo from './imagem/logoTab.png';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import './palestrasPublicas.css';
import { Servidor } from '../../assest/constant';

let url = Servidor.palestras;

const registroPalestras = [
        { route: "/AddPalestra", label: "Registro de Palestras" },
];
class Palestra extends Component {
    constructor(props){
        super(props);
        this.state={
            listaPalestra: [],
        }
        this.listaPalestraMes = this.listaPalestraMes.bind(this); 
        
    }

        componentWillMount() {
            axios.get(url)
            .then(resposta => {
                this.setState({ listaPalestra: resposta.data });
        })
        
    }
    listaPalestraMes = () =>
        this.state.listaPalestra.filter(a =>
            moment(a.dataPalestra).month() === moment().month()
    );

    render(){
        return(
            <div className="containerTabela">
                <div className="cabecaTab">
                    <p className="logoTab"><img alt="" src={logo}/></p>
                    <p className="nomeCasa"><span>CEFE</span>Casa Espírita Fraternidade Emmanuel</p>
                    <p className="txtPl">Escala de Palestras</p>
                </div>
                <table id="tbPalestra" className="table table-sm table-striped table-bordered table-hover">
                    <thead>
                        <tr className="titulosColunas">
                            <th scope="col">Data</th>
                            <th scope="col">Diretor</th>
                            <th scope="col">Expositor</th>
                            <th scope="col">Tema Exposicão</th>
                            <th scope="col">Semana</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listaPalestraMes().map((lista, index) =>
                            <tr key={index}>
                                <td>{(lista.dataPalestra).split('-').reverse().join('/')}</td>
                                <td>{lista.diretorPalestra}</td>
                                <td>{lista.palestrante}</td>
                                <td>{lista.temaPalestra}</td>
                                <td>{lista.semana}</td>
                            </tr>                            
                        )}
                        <tr className="linkCadastrar">
                            <td colSpan={5}>
                                {registroPalestras.map((link, a) => 
                                    <Link to={'/AddPalestra'} key={a}>
                                        <div><small>Cadastrar Palestras</small></div>
                                    </Link>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>        
            </div>
        )
    }
}
export default Palestra