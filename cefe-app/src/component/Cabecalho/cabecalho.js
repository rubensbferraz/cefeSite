import React, { Component } from 'react';
import Menu from './menu.js';
import './css/cabecalho.css';
import Flexbox from 'flexbox-react';

class Cabecalho extends Component{
    render(){
        return(
            <Flexbox className="cabecalho">
                <Flexbox className="app-cabecalho col-xs-12">
                    <Flexbox className="logo col-xs-6">
                        <img src="../../../../images/CEFELogo.png" alt='' id="logoCEFE" />
                        <span id="textologoCEFE" >CEFE<p>Casa Espírita Fratenidade Emanuel</p></span>
                    </Flexbox>
                    <Flexbox className="fundoGiraSol col-xs-12">
                        <img alt='' src="../../../../images/fundoCabecalhoGiraSois.png" />
                    </Flexbox>
                </Flexbox>
                <Menu />
            </Flexbox>        
        );
    }
}

export default Cabecalho;