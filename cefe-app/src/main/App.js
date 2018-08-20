import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Cabecalho from './../components/Cabecalho/cabecalho.js';
import Corpo from './../components/Corpo/corpo.js';
import Rodape from './../components/Rodape/rodape.js';
//import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Cabecalho />
          <Corpo />
          <Rodape />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
