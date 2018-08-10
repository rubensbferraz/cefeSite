import React, {Component} from 'react';

class Palestra extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="containerTabela">
                <table className="table table-active table-sm">
                    <thead>
                        <p><img alt="" src="./imagem/LgTabPalestra.png"></img></p>
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