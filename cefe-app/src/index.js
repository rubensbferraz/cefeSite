import React from 'react';
import ReactDOM from 'react-dom';
import Cabecalho from './component/Cabecalho/cabecalho';
import Corpo from './component/Corpo/corpo';
import Rodape from './component/Rodape/rodape';
import Flexbox from 'flexbox-react';
import './css-pagina.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Flexbox minHeight="100vh" className="appContener">
        <Flexbox element="header" height="200px">
            <Cabecalho className="cabecalho"/>
        </Flexbox>
        <Flexbox flexGrow={1}>
            <Corpo />
        </Flexbox>
        <Flexbox element="footer" height="60px">
            <Rodape />
        </Flexbox>
    </Flexbox>
    , document.getElementById('root'));
registerServiceWorker();
