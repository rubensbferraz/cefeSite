import React from 'react';
import '../Corpo/css/howNoticias.css';

export default class TresNoticiasRapidas extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            primeiraNoticia: '',
            segundaNoticia: '',
            terceiraNotica: ''
        }
    }

   render(){
        return (
            <div className="containerHowNoticias">
                <div className="primeiraNoticia"><h1>Texto Primeira Notica</h1></div>
                <div className="segundaNoticia"><h1>Texto Segunda Notica</h1></div>
                <div className="terceiraNoticia"><h1>Texto Terceira Notica</h1></div>
            </div>
        )
    }
}