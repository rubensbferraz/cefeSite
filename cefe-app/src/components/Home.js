import React, { Component } from 'react'
import HowNoticias from './../components/Corpo/HowNoticias/tresNoticasRapidas';
import CarroselNoticias from './Corpo/Carrosel/CarroselNoticias';

export class Home extends Component {
    render () {
        return (
            <div>
                <HowNoticias/>
                <CarroselNoticias/>
            </div>
        )
    }
}

export default Home;