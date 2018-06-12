import React, { Component } from 'react'
import Flexbox from 'flexbox-react';
import Menu from './menu/menu';
import './css/corpo.css'
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
            </div>
        );
    }
}

export default Corpo