import React, { Component } from 'react';
import './css/cabecalho.css';
import Flexbox from 'flexbox-react';

class Cabecalho extends Component{
    render(){
        return(
            <Flexbox className="cabecalho">
                <Flexbox className="app-cabecalho">
                    <Flexbox className="logo">
                        <Flexbox className="logoCEFE">
                            <img src="../../../../images/CEFELogo.png" alt='' />
                        </Flexbox>
                        <Flexbox className="textologoCEFE">
                            <span>CEFE<p>Casa Espírita Fratenidade Emanuel</p></span>
                        </Flexbox>
                    </Flexbox>
                    <Flexbox className="fundoGiraSol">
                        <img alt='' src="../../../../images/fundoCabecalhoGiraSois.png" />
                    </Flexbox>
                    </Flexbox>
            </Flexbox>        
        );
    }
}

export default Cabecalho;