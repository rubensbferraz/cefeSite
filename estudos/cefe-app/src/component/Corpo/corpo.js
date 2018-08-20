import React, { Component } from 'react'
import Flexbox from 'flexbox-react';
import Menu from './menu/menu';
import './css/corpo.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListaPalestra from '../paginasInternas/palestrasPublicas/listaPalestras';
import Palestra from '../paginasInternas/palestrasPublicas/Palestra';
import AdicionaPalestra from '../paginasInternas/palestrasPublicas/AdicionaPalestras';
import {rotaUrl} from '../assest/constant'
import HowNoticias from './tresNoticasRapidas';

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
                        <Menu/>      
                    </Flexbox>
                    <Flexbox>
                    </Flexbox>
            </div>
        );
    }
}

export default Corpo