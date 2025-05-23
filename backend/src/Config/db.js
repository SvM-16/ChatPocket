const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sebas2004$',
    database: 'conversacion'
});


db.connect((error) =>{
    if(error){
        console.error('Error al conectar con la base de datos:', error)
    }else{
        console.log('La base de datos se conecto corretamente')
    }
});

module.exports = db