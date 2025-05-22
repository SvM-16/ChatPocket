const apiService = require('../Services/ApiService');
const chatModel = require('../Models/ChatModel');

exports.sendMenssage = async (req, res) => {
    const { mensaje } = req.body;
    
    if(!mensaje) {
        return res.status(400).json({
            error: 'Falta escribir en el campo "mensaje"'
        });
    };

    try {
        const respuesta_bot = await apiService.getOpenAIResponse(mensaje);
        await chatModel.saveConversation(mensaje, respuesta_bot);

        res.json({respuesta: respuesta_bot})
    } catch (error) {
        console.error('Error al procesar el mensaje:', error.message);
        res.status(500).json({error: 'Error al comunicarse con IA 🤖 '})
    };
};

exports.getHistory = async (req, res) => {
    try {
        const historial = await chatModel.getAllConversations();
        res.json({ historial });
    } catch (error) {
        console.error('Error al obtener el historial:', error.message);
        res.status(500).json({error: 'Error al obtener conversacion'})
    }
};

exports.resetearHistorial = async (req, res) => {
  try {
    await chatModel.resetAllHistorial();
    res.json({ mensaje: 'Historial reseteado correctamente' });
  } catch (error) {
    console.error('Error al resetear historial:', error);
    res.status(500).json({ error: 'Error al resetear historial' });
  }
};