import React, { Component } from 'react';
import Menu from './menu.js'
import './css/cabecalho.css';
import 'flexbox-react'

class Cabecalho extends Component{
    render(){
        return(
            <div className="cabecalho">
                <div className="app-cabecalho col-xs-12">
                    <div className="logo col-xs-6">
                        <img src="../../../../images/CEFELogo.png" alt='' id="logoCEFE" />
                        <span id="textologoCEFE" >CEFE<p>Casa Espírita Fratenidade Emanuel</p></span>
                    </div>
                    <div className="fundoGiraSol col-xs-12">
                        <img alt='' src="../../../../images/fundoCabecalhoGiraSois.png" />
                    </div>
                </div>
                <Menu />
            </div>        
        );
    }
}

export default Cabecalho;