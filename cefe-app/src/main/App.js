import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { BrowserRouter as Router } from 'react-router-dom';

import Cabecalho from './../components/Cabecalho/cabecalho.js';
import Corpo from './../components/Corpo/corpo.js';
import Rodape from './../components/Rodape/rodape.js';
import './../css-pagina.css';
class App extends Component {
  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

export default App;
