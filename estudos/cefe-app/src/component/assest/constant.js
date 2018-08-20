const ServidorBd = 'http://localhost:5000';
const Servidor = {palestras: ServidorBd+"/api/palestras",
                    usuarios: ServidorBd+"/api/usuarioadministrador"
                    };
const rotaUrl = { rotaLogin: './paginaInternas/listaUsuario.js',
                    rotaBase: '/',
                    rotaAddPalestra: './paginaInternas/palestrasPublicas/AdicionaPalestras',
                    rotaListaPalestra: './paginaInternas/palestrasPublicas/listaPalestras.js',
                    rotaPalestra: './paginaInternas/palestrasPublicas/Palestra.js'
                }


export { Servidor , rotaUrl }