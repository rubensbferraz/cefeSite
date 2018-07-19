import React from 'react';
import './palestrasPublicas.css';
import { Servidor } from '../../assest/constant';
import axios from '../../../../node_modules/axios';

let url = Servidor.palestras;
class CoordenarPalestras extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataPalestra: '',
            diretorPalestra: '',
            palestrante: '',
            semana:'',
            temaPalestra: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange (dataPalestra, diretorPalestra, palestrante, semana, temaPalestra) {
        debugger
        this.setState({
            dataPalestra: dataPalestra,
            diretorPalestra: diretorPalestra,
            palestrante: palestrante,
            semana: semana,
            temaPalestra: temaPalestra
        });
    }
    handleSubmit (event)  { 
        debugger      
        event.preventDefault();
        let teste = {
            dataPalestra: this.state.dataPalestra,
            diretorPalestra: this.state.diretorPalestra,
            palestrante: this.state.palestrante,
            semana: this.state.semana,
            temaPalestra: this.state.temaPalestra
        };
        axios.post(url ,{ teste}).then(resposta => {
            console.log(resposta);
            console.log(resposta.data);
        })
        
    }
    render(){
        console.log(url);
        return (
            <div className="contenerFrmAddPalestra">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >Data da Palestra</label>
                            <input type="Date" name='dataPalestra' className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label >Semana da Palestra</label>
                            <input type="text" name='semana' className="form-control" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label >Diretor da Reunião Pública</label>
                        <input type="text" name='diretorPalestra' className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label >Palestrante Convidado</label>
                        <input type="text" name='palestrante' className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label >Tema da Palestra</label>
                        <input type="text" name='temaPalestra' className="form-control" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">REGISTRAR</button>
                </form>
            </div>
        )
    }
}

export {CoordenarPalestras}