const express = require('express');
const router = express.Router();
const chatController = require('../Controllers/ChatController')

router.post('/Mensajes', chatController.sendMenssage );
router.get('/Historial', chatController.getHistory);
router.delete('/Resetear-Chat', chatController.resetearHistorial)

module.exports = router;