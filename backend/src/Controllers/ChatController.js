const apiService = require('../Services/ApiService');
const chatModel = require('../Models/ChatModel');

exports.sendMessage = async (req, res) => {
    const { mensaje } = req.body;

    if (!mensaje) {
        return res.status(400).json({
            error: 'Falta escribir en el campo "mensaje"'
        });
    }

    try {
        // Guardar el mensaje del usuario
        await chatModel.saveConversation('usuario', mensaje);

        // Obtener la respuesta del bot desde OpenAI
        const respuestaBot = await apiService.getOpenAIResponse(mensaje);

        // Guardar la respuesta del bot
        await chatModel.saveConversation('bot', respuestaBot);

        // Enviar la respuesta al frontend
        res.json({ respuesta: respuestaBot });

    } catch (error) {
        console.error('Error al procesar el mensaje:', error.message);
        res.status(500).json({ error: 'Error al comunicarse con la IA 🤖' });
    }
};

exports.getHistory = async (req, res) => {
    try {
        const historial = await chatModel.getAllConversations();
        res.json({ historial });
    } catch (error) {
        console.error('Error al obtener el historial:', error.message);
        res.status(500).json({ error: 'Error al obtener conversación' });
    }
};


