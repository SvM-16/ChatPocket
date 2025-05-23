const apiService = require('../Services/ApiService');
const chatModel = require('../Models/ChatModel');

exports.sendMessage = async (req, res) => {
    console.log('aca', req.body);

    let { mensaje } = req.body;
    mensaje = mensaje?.trim().toLowerCase(); // Limpiamos entrada

    const mensajesNoValidos = ['bot', 'user', '', null];

    if (!mensaje || mensajesNoValidos.includes(mensaje)) {
        return res.status(400).json({
            error: 'El mensaje es inválido o está vacío.'
        });
    }

    try {
        await chatModel.saveMessage('user', mensaje);

        const respuestaBot = await apiService.getOpenAIResponse(mensaje);

        await chatModel.saveMessage('bot', respuestaBot);
        res.json({ respuesta: respuestaBot });

    } catch (error) {
        console.error('Error al procesar el mensaje:', error.message);
        res.status(500).json({ error: 'Error al comunicarse con la IA 🤖' });
    }
};


exports.getHistory = async (req, res) => {
    try {
        const historial = await chatModel.getAllConversations();
        res.status(200).json(historial)
    } catch (error) {
        console.error('Error al obtener el historial:', error.message);
        res.status(500).json({ error: 'Error al obtener conversación' });
    }
};


