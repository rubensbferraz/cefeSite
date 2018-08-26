import React, { Component } from 'react';
import HowNoticias from './tresNoticasRapidas';
//import Palestra from './../../PaginasInternas/PalestrasPublicas/Palestra';
import Teste from './../HowNoticias/ListaSemanaPalestra'
//import AddPalestras from './../../PaginasInternas/PalestrasPublicas/AdicionaPalestras'
//import Lista from './../../PaginasInternas/PalestrasPublicas/listaPalestras'

export class PrimeiraNoticia extends Component {
    render() {
        return (
            <div>
                <HowNoticias/>
                <Teste/>
            </div>
        );
    }
}

export default PrimeiraNoticia;