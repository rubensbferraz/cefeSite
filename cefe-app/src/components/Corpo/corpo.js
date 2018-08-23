import React, { Component } from 'react'
import Menu from './../../main/Menu';
import './css/corpo.css';
import Routes from './../../main/Routes';

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
                <Menu />
                <Routes/>
            </div>
        );
    }
}

export default Corpo