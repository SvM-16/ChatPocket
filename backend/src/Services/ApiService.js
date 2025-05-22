const axios = require('axios');

exports.getOpenAIResponse = async (mensaje) => {
    const response = await axios.post(
        'http://pocki-api-env-1.eba-pprtwpab.us-east-1.elasticbeanstalk.com/api/getOpenaiResponse',
        { input: mensaje }
    );
    
    return response.data.choices[0].message.content;
}