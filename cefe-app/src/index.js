import React from 'react';
import ReactDOM from 'react-dom';

import App from './main/App';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         window.sessionStorage.getItem('chave') ? (
//             <Component {...props} />
//         ) : (
//                 <Redirect to={{
//                     pathname: '/',
//                     state: { from: props.location }
//                 }} />
//             )
//     )} />
// );

// const PublicRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         window.sessionStorage.getItem('chave') ? (
//             <Redirect to={{
//                 pathname: '/admin/index',
//                 state: { from: props.location }
//             }} />
//         ) : (
//                 <Component {...props} />
//             )
//     )} />
// )

ReactDOM.render(<App />, document.getElementById('root'));

