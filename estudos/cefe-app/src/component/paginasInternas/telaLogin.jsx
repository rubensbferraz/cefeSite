import React, {Component} from 'react';
import './css/login.css';
import { Servidor } from '../assest/constant';
import axios from 'axios';

let baseDadosUsuario = Servidor.usuarios;

class ListaUsuario extends Component{
    constructor (props) {
        super(props);
        this.state = {
            listaUsuario: '',
            email: "",
            password: ""
        }
     
    }

    baseDdUsuario(lista){
        axios.get(baseDadosUsuario)
            .then((result) => {
              lista.array = result.data;
            }).catch((err) => {
                console.log(err);
                
            });
    }
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
    }
    render(){
        return(
            <div className="Login">
                <form  onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="label">Email</label>
                        <input
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group" >
                        <label className="label">Password</label>
                        <input
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"/>
                    </div>
                    <button
                        className="btn btn-primary"
                        disabled={!this.validateForm()}
                        type="submit">   
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default ListaUsuario




 