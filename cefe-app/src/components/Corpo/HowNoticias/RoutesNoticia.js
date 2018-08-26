import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Primeira from './PrimeiraNoticia';

export class RoutesNoticia extends Component {
    render() {
        return (
            <main className="container">
            <Switch>
                <Route exact path='/primeira' component={Primeira} />
            </Switch>
            </main>
        );
    }
}

export default RoutesNoticia;