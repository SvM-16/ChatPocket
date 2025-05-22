const express = require('express');
const router = express.Router();
const chatController = require('../Controllers/ChatController')

router.post('/Mensajes', chatController.sendMessage);
router.get('/Historial', chatController.getHistory);

module.exports = router;