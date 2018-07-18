import React from 'react';
import './palestrasPublicas.css';
import { Servidor } from '../../assest/constant';
import axios from '../../../../node_modules/axios';

let url = Servidor.palestras;
class CoordenarPalestras extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            temaPalestra: '',
            palestrante: '',
            diretorPalestra: '',
            dataPalestra: '',
            semana: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange (event) {
        debugger
        this.setState({
            temaPalestra: this.state.temaPalestra,
            palestrante: this.state.palestrante,
            diretorPalestra: this.state.diretorPalestra,
            dataPalestra: this.state.dataPalestra,
            semana: this.state.semana
        });
    }
    handleSubmit (event)  { 
        debugger      
        event.preventDefault();
        axios.post(url,{ 
            temaPalestra: this.state.temaPalestra,
            palestrante: this.state.palestrante,
            diretorPalestra: this.state.diretorPalestra,
            dataPalestra: this.state.dataPalestra,
            semana: this.state.semana       
                }).then(resposta => {
            console.log(resposta)
            console.log(resposta.data)
        }).catch(error => {console.log(error)})
    }
    render(){
        console.log(url);
        return (
            <div className="contenerFrmAddPalestra">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >Data da Palestra</label>
                            <input type="Date" name={this.state.dataPalestra} className="form-control" onChange={(e)=> this.handleChange(e.dataPalestra)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label >Semana da Palestra</label>
                            <input type="text" name={this.state.semana} className="form-control" onChange={(e)=> this.handleChange(e.semana)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label >Diretor da Reunião Pública</label>
                        <input type="text" name={this.state.diretorPalestra} className="form-control" onChange={(e)=> this.handleChange(e.diretorPalestra)}/>
                    </div>
                    <div className="form-group">
                        <label >Palestrante Convidado</label>
                        <input type="text" name={this.state.palestrante} className="form-control" onChange={(e)=> this.handleChange(e.palestrante)}/>
                    </div>
                    <div className="form-group">
                        <label >Tema da Palestra</label>
                        <input type="text" name={this.state.temaPalestra} className="form-control" onChange={(e)=> this.handleChange(e)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">REGISTRAR</button>
                </form>
            </div>
        )
    }
}

export {CoordenarPalestras}