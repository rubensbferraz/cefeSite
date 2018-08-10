import React, { Component } from 'react'
import Flexbox from 'flexbox-react';
//import Menu from './menu/menu';

import './css/corpo.css';
import Palestra from '../paginasInternas/palestrasPublicas/ListaPalestras';

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