import React, {Component} from 'react';
// @ts-ignore
import img from './imagem/logoTab.png';
import './palestrasPublicas.css';

class Palestra extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
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
                        <tr>
                            <td>08/08/2018</td>
                            <td>luisio</td>
                            <td>Maria</td>
                            <td>Minha Casas Faz Palestras Boas</td>
                            <td>Quarta</td>
                        </tr>
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>        
            </div>
        )
    }
}

export default Palestra