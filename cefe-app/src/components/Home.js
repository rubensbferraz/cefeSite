import React, { Component } from 'react'
import HowNoticias from './../components/Corpo/HowNoticias/tresNoticasRapidas';
import CarroselNoticias from './Corpo/Carrosel/CarroselNoticias';
import { MosaicoNoticias } from './Corpo/MosaicoNoticias/mosaicoNoticias';

export class Home extends Component {
    render () {
        return (
            <div>
                <HowNoticias/>
                <CarroselNoticias/>
                <MosaicoNoticias/>
            </div>
        )
    }
}

export default Home;