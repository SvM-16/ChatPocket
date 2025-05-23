const db = require('../Config/db');

exports.saveMessage = (sender, content) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO mensajes (content, sender) VALUES (?, ?)';
    const values = [content, sender];

    db.query(sql, values, (error, resultado) => {
      if (error) {
        console.error('Error al guardar el mensaje:', error);
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