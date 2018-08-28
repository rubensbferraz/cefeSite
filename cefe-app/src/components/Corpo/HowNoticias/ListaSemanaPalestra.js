import React, { Component } from 'react'
import {Servidor} from './../../assest/constant'
import axios from 'axios';
import * as moment from 'moment';
import './../css/PrimeiraNoticia.css'
const url = Servidor.palestras;
class ListaSemanaPalestra extends Component {
    constructor(props){ 
        super(props)
        this.state = {
            listaPalestra:[]
        }
    }
    componentWillMount() {
        axios.get(url)
        .then(resposta => {
            this.setState({ listaPalestra: resposta.data});
        })
    }
    
    listaPalestraSemana = () => 
        this.state.listaPalestra.filter(a => 
        moment(a.dataPalestra).week() === moment().week()
    );
    
    render = () => (
            <div className="contenerPrimeiraNoticia">
            <table>
                <tbody>
                {this.listaPalestraSemana().map((evento, i) =>
                    <tr key={i}>
                    <th className="titulo">:: {evento.semana}</th>
                    <th className="pData">{moment(evento.dataPalestra).format("DD-MM-Y")}</th>
                    <th className="pPalestrante"><p>Orador: </p> {evento.palestrante}</th>
                    <th className="pTema"><p>Tema: </p>{evento.temaPalestra}</th>
                    </tr>
                )}
                </tbody>
            </table>

            </div>
        )
            
 }

export default ListaSemanaPalestra;