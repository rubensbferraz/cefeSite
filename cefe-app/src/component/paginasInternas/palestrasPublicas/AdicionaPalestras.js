import React, {Component} from 'react';
import './palestrasPublicas.css';
import {Servidor} from '../../assest/constant';
import axios from 'axios';

let url = Servidor.palestras;
class AdicionaPalestras extends Component{
   constructor(props){
       super(props);
       this.state = {
           palestra:{
               dataPalestra: '',
               diretorPalestra: '',
               palestrante: '',
               semana: '',
               temaPalestra: ''
           }
       }
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.limpaFormulario = this.limpaFormulario.bind(this);
    }

    handleChange(event) {
        const { palestra} = this.state;
        palestra[event.target.name] = event.target.value;
        this.setState({ palestra });
    }
    
    limpaFormulario(){
        return this.myFormRef.reset();
       
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post(url, this.state.palestra).then(resposta => {
            console.log(resposta.data);
        }).catch(Error => {console.log(Error + "Não pois possivel registrar Palestra")});

    }

   render(){
       return(
           <div className="contenerFrmAddPalestra">
            <form id="teste" ref={(el)=> this.myFormRef = el} onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Data da Palestra</label>
                           <input type="Date" name='dataPalestra' className="form-control" id="dataPalestra" placeholder="Data Para a Palestra" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="">Semana da Palestra</label>
                        <input type="text" name='semana' className="form-control" id="dataPalestra" placeholder="Entre com a Semana" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label >Diretor da Reunião Pública</label>
                        <input type="text" name='diretorPalestra' placeholder="Entre com o Diretor da Reunião" className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label >Palestrante Convidado</label>
                        <input type="text" name='palestrante' placeholder="Entre com o Orador da Noite" className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label >Tema da Palestra</label>
                        <input type="text" name='temaPalestra' placeholder="Entre com o Tema da Noite" className="form-control" onChange={this.handleChange}/>
                    </div>
                    </div>
                   <button type="submit" onClick={this.limpaFormulario}  className="btn btn-primary">REGISTRAR</button>
                    </form>
            </div>
       )
   }
}

export default AdicionaPalestras;
