import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './../components/Home';
//Casa Espírita
import QuemSomos from './../components/menu/casaEspirita/diretoria/QuemSomos';
import QuemEQuem from './../components/menu/casaEspirita/diretoria/QuemEQuem';
    //Administração
    import GestaoAnterior from './../components/menu/casaEspirita/administracao/GestaoAnterior';
    import GestaoAtual from './../components/menu/casaEspirita/administracao/GestaoAtual';
//Estudos
import Cursos from './../components/menu/estudos/Cursos';
import Oficinas from './../components/menu/estudos/Oficinas';
    //Evangelização
    import Adultos from './../components/menu/estudos/evangelizacao/Adultos';
    import Infancias from './../components/menu/estudos/evangelizacao/Infancia';
    import Jovens from './../components/menu/estudos/evangelizacao/Jovens';
//Práticas 
import AplicadoresPasses from './../components/menu/praticas/AplicadoresPasses';
import Bazar from './../components/menu/praticas/Bazar';
import Eventos from './../components/menu/praticas/Eventos';
import GrupoMediunico from './../components/menu/praticas/GrupoMediunico';
import MaoLimpas from './../components/menu/praticas/MaoLimpas';
    //Atendimento
    import Assistidos from './../components/menu/praticas/atendimento/Assistidos';
    import Gestantes from './../components/menu/praticas/atendimento/Gestantes';
    //Campanhas
    import Cecx from './../components/menu/praticas/campanhas/Cecx';
    import Cfas from './../components/menu/praticas/campanhas/Cfas';
    import Jlar from './../components/menu/praticas/campanhas/Jlar';
//Arte
import Temgirantes from './../components/menu/artes/Temgirantes';
    //Corais
    import Cefe from './../components/menu/artes/Corais/Cefe';
    import Ciameimai from './../components/menu/artes/Corais/Ciameimei';
//Contatos
import Contato from './../components/menu/contatos/MaioresInformacoes';
    //Redes Sociais
    import FaceBook  from './../components/menu/contatos/RedeSociais/FaceBook';
    import Instagram from './../components/menu/contatos/RedeSociais/Instagram';
    import Twitter from './../components/menu/contatos/RedeSociais/Twitter';

import { NoMatch } from './../components/NoMatch';

export class Routes extends Component {
    render () {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    {/*Casa Espirita*/}
                    <Route path='/quemSomos' component={QuemSomos} />
                    <Route path='/quemEQuem' component={QuemEQuem} />
                    {/*Administração*/}
                    <Route path='/gestaoAnterior' component={GestaoAnterior}/>
                    <Route path='/gestaoAtual' component={GestaoAtual} />
                    {/*Estudos*/}
                    <Route path='/cursos' component={Cursos} />
                    <Route path='/oficinas' component={Oficinas} />   
                    {/*Evangelização*/}
                    <Route path='/adultos' component={Adultos} />
                    <Route path='/infancia' component={Infancias} /> 
                    <Route path='/jovens' component={Jovens} /> 
                    {/*Pratica*/}
                    <Route path='/aplicadoresPasses' component={AplicadoresPasses} />
                    <Route path='/bazar' component={Bazar} />
                    <Route path='/eventos' component={Eventos} />  
                    <Route path='/grupoMediunico' component={GrupoMediunico} />  
                    <Route path='/maoLimpas' component={MaoLimpas} /> 
                    {/*Atendimento*/} 
                    <Route path='/assistidos' component={Assistidos} />                                     
                    <Route path='/gestantes' component={Gestantes} />  
                    {/*Campanhas*/}
                    <Route path='/cecx' component={Cecx} />
                    <Route path='/cfas' component={Cfas} />
                    <Route path='/jlar' component={Jlar} />  
                    {/*Arte*/}
                    <Route path='/temgirantes' component={Temgirantes} />
                    {/*Corais*/}
                    <Route path='/cefe' component={Cefe} />
                    <Route path='/ciameimai' component={Ciameimai} />                                                             
                    {/*Contato*/}
                    <Route path='/contato' component={Contato}/>
                    {/*Redes Sociais*/}
                    <Route path='/facebook' component={FaceBook} />
                    <Route path='/instagram' component={Instagram} />
                    <Route path='/twitter' component={Twitter} /> 

                    <Route component={NoMatch}/>
                </Switch>
            </main>
        )
    }
};

export default Routes;