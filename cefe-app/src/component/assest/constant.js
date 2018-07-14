const ServidorBd = 'http://localhost:5000';
const Servidor = {palestras: ServidorBd+"/api/palestras",
                    usuarios: ServidorBd+"/api/usuarioadministrador"
                    };
const rotaUrl = { rotaLogin: './paginaInternas/listaUsuario.js'}

export { Servidor , rotaUrl }