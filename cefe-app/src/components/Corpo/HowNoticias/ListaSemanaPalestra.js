import React, { Component } from 'react'
import {Servidor} from './../../assest/constant'
import axios from 'axios';
import * as moment from 'moment';

const url = Servidor.palestras;
class ListaSemanaPalestra extends Component {
    constructor(props){
        super(props)
        this.state = {
            semana: [],
            semanaPalestra: [],
            semanaAtual: '',
            listaPalestra:[]
        }
    }
    semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    semanaPalestra = ["Domingo", "Sexta"];
    dataAtual = moment().format("D-MM-Y");

    componentDidMount() {
        axios.get(url)
        .then(resposta => {
            console.log(resposta.data);
        })
    }
    
    semanaDePalestra(){
        axios.get(url)
        .then(resposta => {
            const listaPalestra = resposta.data;
            const dataCadastradas = listaPalestra.map(dt => dt.dataPalestra);

                for(var i=0; i<=dataCadastradas.length; i++){
                    const convData = moment(dataCadastradas[i]).format("DD-MM-Y").toString();
                    const myDate = new Date(convData);
                    const diaSemanaCorrente = this.semana[myDate.getMonth()];
                       console.log(diaSemanaCorrente);
                }
                
                
            })
            return <p>{this.state.convData}</p>;
    }
    
 
    render () {
        return (
            <div>
                {this.semanaDePalestra()}
            </div>
        )
    }
}

export default ListaSemanaPalestra;