import React, { Component } from 'react';
import { Servidor } from './../../assest/constant'
import axios from 'axios';
import * as moment from 'moment';
const url = Servidor.palestras;

class ListaMensalPalestra extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaPalestra: []
        }
    }

    componentWillMount() {
        axios.get(url)
            .then(resposta => {
                this.setState({ listaPalestra: resposta.data });
        })
    }

    listaPalestraMensal = () =>
        this.state.listaPalestra.filter(a =>
            moment(a.dataPalestra).month() === moment().month()
    );

    render() {
        return (
            <div className="contenerListaMensalPalestra">
                <table className="table table-active table-sm table-striped table-bordered table-hover">
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
                        {this.listaPalestraMensal().map((lista, i) =>
                            <tr key={i}>
                                <td>{moment(lista.dataPalestra).format("DD-MM")}</td>
                                <td>{lista.diretorPalestra}</td>
                                <td>{lista.palestrante}</td>
                                <td>{lista.temaPalestra}</td>
                                <td>{lista.semana}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListaMensalPalestra;