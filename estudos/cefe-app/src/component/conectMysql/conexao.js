let mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'cefeemmanuel1'
});

connection.connect(function(error) {
    if (!!error) {
        console.log("não conectado" + error);
    } else {
        console.log('conectou!!');
    }
})

export {connection}
