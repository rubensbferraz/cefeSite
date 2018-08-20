import React, { Component } from 'react'
import Menu from './../../main/Menu';
import './css/corpo.css';

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
                <Menu/>      
            </div>
        );
    }
}

export default Corpo