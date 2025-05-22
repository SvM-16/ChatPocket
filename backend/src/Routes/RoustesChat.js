const express = require('express');
const router = express.Router();
const chatController = require('../Controllers/ChatController')

router.post('/', chatController.sendMenssage );
router.get('/', chatController.getHistory);

module.exports = router;