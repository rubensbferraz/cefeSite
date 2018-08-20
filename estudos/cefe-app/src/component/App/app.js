import React, {Component} from 'react';
import Cabecalho from '../Cabecalho/cabecalho';
import Corpo from '../Corpo/corpo';
import Rodape from '../Rodape/rodape';
import Flexbox from 'flexbox-react';

export default class App extends Component {

    render(){
        return(
            <Flexbox minHeight="100vh" className="appContener">
                <Flexbox element="header" height="200px">
                    <Cabecalho className="cabecalho" />
                </Flexbox>
                <Flexbox flexGrow={1}>
                    <Corpo />
                </Flexbox>
                <Flexbox element="footer" height="60px">
                    <Rodape />
                </Flexbox>
            </Flexbox>
        );
    }
}