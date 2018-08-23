import React from 'react';
import './../css/howNoticias.css';

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
                <div className="primeiraNoticia"><h4>Texto Primeira Notica</h4></div>
                <div className="segundaNoticia"><h4>Texto Segunda Notica</h4></div>
                <div className="terceiraNoticia"><h4>Texto Terceira Notica</h4></div>
            </div>
        )
    }
}