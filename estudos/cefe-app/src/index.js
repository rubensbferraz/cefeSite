import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './component/App/app';

import { rotaUrl} from '../src/component/assest/constant';
import Corpo from './component/Corpo/corpo';
import Palestra from './component/paginasInternas/palestrasPublicas/Palestra';
import AdicionaPalestra from './component/paginasInternas/palestrasPublicas/AdicionaPalestras';
import ListaPalestra from './component/paginasInternas/palestrasPublicas/listaPalestras';

import './css-pagina.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact-path="/" component={Palestra}>
                <Route path={rotaUrl.rotaPalestra} component={Palestra}/>
                <Route path={rotaUrl.rotaAddPalestra} component={AdicionaPalestra}/>
                <Route path={rotaUrl.rotaListaPalestra} component={ListaPalestra} />
            </Route>
        </Switch>
    </Router>
), 
    document.getElementById('app'));
registerServiceWorker();