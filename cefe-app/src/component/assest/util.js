// requisicaoLogin(event) {
//         event.preventDefault();
//         if (!this.validarEmail(event) || this.temCamposBranco()) {
//             Alerta.erro("Erro: Email ou Senha Incorreto");
//             return;
//         }
//         const { login } = this.state;
//         let loginExiste = !!listaSites.find(site => site.sigla == 'BSB').usuariosMaster.find(e =>                e.login == login.email);

//         const URL = 'http://localhost:5000/api/Usuario'
//         axios
//             .post(URL, {
//                 Nome: login.email.trim(),
//                 Senha: login.senha
//             })
//             .then(resp => {
//                 cookies.set('chave', resp.data, { path: '/' });
//                 window.sessionStorage.setItem("email", login.email);

//                 axios.get(`${URLUsuarioAdm}`)
//                     .then(resposta => {
//                         if (resposta.data.find(user => user.login == login.email) || loginExiste)
//                             this.props.history.push('/admin/index');
//                         else
//                             this.props.history.push('/calendario');
//                     })
//             })
//             .catch((error) => {
//                 Alerta.erro(error.response.data.error)

//             });
//     }