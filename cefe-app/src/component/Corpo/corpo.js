import React, { Component } from 'react'
import Flexbox from 'flexbox-react';
import Menu from './menu/menu';
//import TelaLogin from '../paginaInternas/telaLogin';
import './css/corpo.css';
import { ListaDePalestras } from '../paginasInternas/palestrasPublicas/listaPalestras';
//import * as Lista from '../assest/util/listaColaboradorMaster';
//import './menu/styleMenu.css';

class Corpo extends Component {
    constructor(props){
        super(props);
        this.state = {
            listColaborador: ""
        }
    }


    render(){
        return(
            <div className="corpo" >
                <Flexbox>      
                    <Menu />              
                </Flexbox>
                <Flexbox>
                    <ListaDePalestras/>
                </Flexbox>
            </div>
        );
    }
}

export default Corpo