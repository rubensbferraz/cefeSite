import React, { Component } from 'react'
import HowNoticias from './../components/Corpo/HowNoticias/tresNoticasRapidas';

export class NoMatch extends Component {
    render () {
        return (
            <div>
                <HowNoticias/>
                <h4>Conteúdo não encontrado!!</h4>
                <p>Favor verifique o endereço digitado..</p>
            </div>
        )
    }
}

export default NoMatch