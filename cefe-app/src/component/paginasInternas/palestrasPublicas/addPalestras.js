import React from 'react';
import './palestrasPublicas.css';
import { Servidor } from '../../assest/constant';
import axios from '../../../../node_modules/axios';

let url = Servidor.palestras;
class CoordenarPalestras extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            palestra: {
                dataPalestra: '',
                diretorPalestra: '',
                palestrante: '',
                semana: '',
                temaPalestra: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange (event) {
        const { palestra } = this.state;
        palestra[event.target.name] = event.target.value;
        this.setState({ palestra });
        console.log(palestra)
    }
    limpaFormulario(){
        
    }
        
    handleSubmit (event)  {     
        event.preventDefault();
        axios.post(url , this.state.palestra).then(resposta => {
            console.log(resposta);
            console.log(resposta.data);
        })
        this.limpaFormulario();
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