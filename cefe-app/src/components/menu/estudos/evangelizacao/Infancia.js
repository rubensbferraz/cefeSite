import React, { Component } from 'react'
import Coordenadoras from './imagens/coodenadoras.png';
import Voltar from './imagens/voltar.png';
import './../../css/styleMenu.css';
import './evangelizacao.css'

export class Infancia extends Component {
    render () {
        return (
            <div>
                <div id="evangeliza">
                    <div className="img">
                        <a target="_parent" href="/">
                            <img src={Coordenadoras} alt="Fjords"/>
                        </a>
                            <div className="desc">Essas são as coordenadoras, venham conhecê-las.</div>
                    </div>
                        
                        <table table>
                            <tr>
                                <th scope="col"><p className="n"> A Evangelização Espírita Infanto-juvenil  Meimei de nossa Casa Espírita acontece todos os domingos das 9h às 11h. Aliada  a ela oferecemos, no mesmo horário, a Evangelização de Adultos para os pais e  familiares/amigos dos evangelizandos.<br />
                                    <br />
                                    A nossa Mocidade Espírita ocorre aos  domingos, das 17h às 18:30, antes das reuniões públicas.<br />
                                    <br />
                                    Nas atividades de domingo, contamos com  cinco turmas: <br />
                                    Maternal (3 e 4 anos),  Jardim(5  e 6 anos), 1º ciclo (7 e 8 anos), 2º ciclo (9 e 10 anos) e 3º ciclo (11 e 12  anos).<br />
                                    <br />
                                    Iniciamos com a Alegria Cristã,  aplicação de passe magnético e água fluida para todos. Após a prece inicial, os  evangelizandos e adultos encaminham-se para as salas de evangelização para  usufruírem de aulas baseadas nas Apostilas da FEB. <br />
                                    <br />
                                    Todo último domingo do mês temos   “Hora de Arte”, um trabalho desenvolvido  por irmãos amigos, que estimulam em nossas crianças o sentido do belo e  criativo. <br />
                                    <br />
                                    Realizamos passeios no mês de outubro, em comemoração ao dia da  criança e aniversário da CEFE; fazemos o dia da família; festa junina dos  valores, comemorações natalinas, etc.<br />
                                    <br />
                                    Ao final dos trabalhos, ofertamos Sopa  Fraterna para ser deliciada na CEFE e/ou levada para casa. <br />
                                    <br />
                                    Este alimento já  começa seu preparo (corte de verduras) no sábado anterior a evangelização, a  partir das 14:30h. Mãos amigas nos auxiliam muito! <br />
                                    <br />
                                    Contamos com um universo de 70 crianças  que nos abençoam a cada encontro. Ser evangelizador é uma graça divina!<br />
                                    <br />
                                    <span className="c">Você que ainda não conhece uma maneira  maravilhosa de auxiliar alguém, venha, <br />
                                        “EVANGELIZE E COOPERE COM JESUS.”</span></p></th>
                            </tr>
                            <tr>

                            </tr>
                            <th>
                                <th align="right" scope="col"><a href="/" target="_top"><img src={Voltar} alt="Fjords"/></a></th>
                            </th>
                        </table>
                </div>
            </div>
        )
    }
}

export default Infancia;