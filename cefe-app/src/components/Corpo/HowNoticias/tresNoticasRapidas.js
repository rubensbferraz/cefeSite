import React from 'react';
import './../css/howNoticias.css';
import { Link } from 'react-router-dom';

const primeiraNoticia = [
        { route: "/palestra", label: "Escala de Oradores" },
];

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
                <div className="primeiraNoticia">
                    {primeiraNoticia.map((link, a) => 
                        // @ts-ignore
                        <Link to={'/palestra'} key={a}>
                            <small className="link">Veja aqui a Escala de Oradores</small>
                        </Link>
                    )}
                </div>
                <div className="segundaNoticia"><p><small>O III Intercâmbio de Trabalhadores da Arte no Movimento Espírita será realizado no dia 
                    1º de setembro, às 8h30, na sede da Federação Espírita do Rio Grande do Sul (FERGS) promotora do evento.  “A Arte a Serviço do Bem” será o tema abordado.
                    </small></p></div>
                <div className="terceiraNoticia"><p><small>Promovido pela Federação Espírita do Estado da Bahia (FEEB) com apoio da Federação Espírita 
                    Brasileira (FEB) e do CR 13 (Conselho Regional), no período de 23 a 26 de agosto será realizado o 25º Fórum Espírita de Itanhém (BA) 
                    com o tema “A Gênese”.</small></p></div>
            </div>
        )
    }
}