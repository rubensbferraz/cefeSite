import React, { Component } from 'react'
import Flexbox from 'flexbox-react';
//import Menu from './menu/menu';

import './css/corpo.css';
//import Palestra from '../paginasInternas/palestrasPublicas/listaPalestras';
import Palestra from '../paginasInternas/palestrasPublicas/Palestra';
//import Palestra from '../paginasInternas/palestrasPublicas/AdicionaPalestras';
//import HowNoticias from './tresNoticasRapidas';

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
                </Flexbox>
                <Flexbox>
                    <Palestra/>
                </Flexbox>
            </div>
        );
    }
}

export default Corpo