import React, {Component} from 'react';
// @ts-ignore
import DataHelper from '../../uteis/DataHelper';
// @ts-ignore
import img from './imagem/logoTab.png';
import axios from 'axios';
import './palestrasPublicas.css';
import { Servidor } from '../../assest/constant';

let url = Servidor.palestras;
class Palestra extends Component {
    constructor(props){
        super(props);
        this.state={
            listaPalestra: [],
        }
    }
    componentDidMount() {
        axios.get(url)
            .then(resposta => {
                const listaPalestra = resposta.data;
                this.setState({ listaPalestra })
            })
    }
    render(){
        let listaPalestra = this.state.listaPalestra;
        let teste = listaPalestra.map(campo => campo.dataPalestra);
        console.log(teste.join())
        return(
            <div className="containerTabela">
                <div className="cabecaTab">
                    <p className="logoTab"><img alt="" src={img}></img></p>
                    <p className="nomeCasa"><span>CEFE</span>Casa Espírita Fraternidade Emmanuel</p>
                    <p className="txtPl">Escala de Palestras</p>
                </div>
                <table id="tbPalestra" className="table table-active table-sm">
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
                        {listaPalestra.map(lista => 
                            <tr key={lista.idPalestra}>
                            <td>{(lista.dataPalestra).split('-').reverse().join('/')}</td>
                            <td>{lista.diretorPalestra}</td>
                            <td>{lista.palestrante}</td>
                            <td>{lista.temaPalestra}</td>
                            <td>{lista.semana}</td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>        
            </div>
        )
    }
}
export default Palestra