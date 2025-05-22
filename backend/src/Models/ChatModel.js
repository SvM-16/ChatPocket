const db = require('../Config/db')

exports.saveConversation = (mensaje, respuesta) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO conversaciones (mensaje_usuario, respuesta_bot) VALUES (?, ?)';
        db.query(sql, [mensaje, respuesta], (error, resultado)=>{
            if(error) {
                console.error('Error al guardar la conversación:', error);
                return reject(error);
            }
            resolve(resultado.insertId);
        });
    });
};

exports.getAllConversations = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM Conversaciones ORDER BY fecha DESC';
        db.query(sql, (error, resultado) => {
            if(error) return reject (error);
            resolve(resultado);
        });
    });
};

exports.resetAllHistorial = () => {
    return new Promise((resolve, reject) => {
        const sql = 'TRUNCATE TABLE conversaciones';
        db.query(sql, (error, resultado) => {
            if (error) return reject(error);
            resolve(resultado);
        });
    });
};