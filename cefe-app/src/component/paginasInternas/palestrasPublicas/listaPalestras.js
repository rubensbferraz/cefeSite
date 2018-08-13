import React from 'react';
import axios from 'axios';
import { Servidor } from '../../assest/constant';
import './palestrasPublicas.css';
import DataHelper from '../../uteis/DataHelper';
let url = Servidor.palestras;

class ListaDePalestras extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listaPalestra:[],
            data: ''
        }
    }

    componentDidMount(){
        axios.get(url)
        .then(resposta => {
            const listaPalestra = resposta.data;
            this.setState({ listaPalestra})
        })
    }



    render(){
        let listaPalestra = this.state.listaPalestra;
        const teste = listaPalestra.map(d => d.dataPalestra);
        console.log(teste);
        return(
            <div className="contener_tabelaPalestra">
                <table className="table table-responsive">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Data</th>
                            <th scope="col">Diretor</th>
                            <th scope="col">Palestrante</th>
                            <th scope="col">Semana</th>
                            <th scope="col">Tema</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {listaPalestra.map(lista =>
                        <tr key={lista.idPalestra}> 
                            <td>{(lista.dataPalestra).split('-').reverse().join('/')}</td>
                            <td>{lista.diretorPalestra}</td>
                            <td>{lista.palestrante}</td>
                            <td>{lista.semana}</td>
                            <td>{lista.temaPalestra}</td>
                        </tr>
                            )}
                    </tbody>
                </table> 
            </div>
        )
    }
}

export default ListaDePalestras