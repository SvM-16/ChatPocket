const db = require('../Config.js/db')

exports.saveConversation = (mensaje, respuesta) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO conversaciones (mensaje_usuario, respuesta_bot) VALUES (?, ?)';
        
    })
}