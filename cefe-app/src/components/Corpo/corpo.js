import React, { Component } from 'react'
import Menu from './../../main/Menu';
import './css/corpo.css';
import Routes from './../../main/Routes';

import HowNoticias from './HowNoticias/tresNoticasRapidas';

class Corpo extends Component {
    constructor(props){
        super(props);
        this.state = {
            listColaborador: ""
        }
    }

    render(){
        return(
            <div className="corpo transparentView" >
                <Menu />
                <Routes/>
            </div>
        );
    }
}

export default Corpo