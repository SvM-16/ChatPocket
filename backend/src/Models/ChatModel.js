const db = require('../Config/db');

exports.saveConversation = (mensaje, respuesta) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO mensajes (content, sender) VALUES (?, ?), (?, ?)';
        const values = [mensaje, 'user', respuesta, 'bot'];

        db.query(sql, values, (error, resultado) => {
            if (error) {
                console.error('Error al guardar la conversación:', error);
                return reject(error);
            }
            resolve(resultado.insertId);
        });
    });
};

exports.getAllConversations = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM mensajes ORDER BY timestamps ASC';
        db.query(sql, (error, resultado) => {
            if (error) return reject(error);
            resolve(resultado);
        });
    });
};