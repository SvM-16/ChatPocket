const apiService = require('../Services/ApiService');
const chatModel = require('../Models/ChatModel');

exports.sendMessage = async (req, res) => {

    console.log('aca',req.body);

    const { mensaje } = req.body;

    if (!mensaje) {
        return res.status(400).json({
            error: 'Falta escribir en el campo "mensaje"'
        });
    }

    try {
        await chatModel.saveConversation('usuario', mensaje);

        const respuestaBot = await apiService.getOpenAIResponse(mensaje);

        await chatModel.saveConversation('bot', respuestaBot);
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


