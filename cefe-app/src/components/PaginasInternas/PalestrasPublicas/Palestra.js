import React, {Component} from 'react';
import img from './imagem/logoTab.png';
import axios from 'axios';
import * as moment from 'moment';
import './palestrasPublicas.css';
import { Servidor } from '../../assest/constant';

let url = Servidor.palestras;
let addPalestra = './../addPalestra';
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
                    <p className="logoTab"><img alt="" src={img}></img></p>
                    <p className="nomeCasa"><span>CEFE</span>Casa Espírita Fraternidade Emmanuel</p>
                    <p className="txtPl">Escala de Palestras</p>
                </div>
                <table id="tbPalestra" className="table table-active table-sm table-striped table-bordered table-hover">
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
                            // @ts-ignore
                            <td colspan="5">
                                <a href={addPalestra} >Cadastrar Palestra</a>
                            </td>
                        </tr>
                    </tbody>
                </table>        
            </div>
        )
    }
}
export default Palestra