## Proyecto ChatBot 👾

  

Esta aplicación web de chatbot facilita la interacción entre el usuario y un sistema automatizado que responde mediante una API externa. El cliente está desarrollado con React, ofreciendo una interfaz ágil y dinámica, mientras que el servidor está construido con Express para manejar las solicitudes y la lógica del chat. Para gestionar y conservar el historial de mensajes, se emplea una base de datos MySQL, asegurando un almacenamiento confiable y estructurado de la información. Esta combinación tecnológica permite una experiencia conversacional eficiente y escalable. 

 

## 💻 Tecnologias utilizadas 

### **Backend** 

-Node.js 

-Axios 

-Express.js 

-MySql2 

-Cors 

### **Frontend** 

-React.js 

-Axios 

-Tailwindcss 

-React-icons 

-Vite 

## 📁Estructura del proyecto 

 

backend/ 

| 

|── node_modules/                

| 

|── src/                         

|   |── Config/                 

|   |   └── db.js               

|   | 

|   |── Controllers/            

|   |   └── ChatController.js    

|   | 

|   |── db/                     

|   |   └── db.sql         

|   | 

|   |── Models/                  

|   |   └── ChatModel.js        

|   | 

|   |── Routes/                  

|   |   └── RoustesChat.js       

|   | 

|   |── Services/                

|   |   └── ApiService.js       

| 

|── app.js                      

|── package.json                 

|── package-lock.json 

| 

frontend/ 

| 

|── src/ 

|   |── Api/ 

|   |   ├── axios.js            # Instancia configurada de Axios 

|   |   └── iaPocki.js          # Funciones para acceder a la API de IA 

|   |── Context/ 

|   |   └── ChatContext.jsx     # Manejo global del estado del chat 

|   |── assets/                 # Archivos estáticos (imágenes, íconos, etc.) 

|   |── App.jsx                 # Componente principal de la UI 

|   |── main.jsx                # Punto de entrada de React 

|   |── index.css / App.css     # Estilos 

| 

|── index.html                  # HTML base 

|── vite.config.js              # Configuración del bundler Vite 

|── package.json     

 

## ⚙️Instalación y Configuración 

### **Backend** 

1. Clonar repositorio:
   
  -git clone https://github.com/SvM-16/ChatPocket.git 
  -cd backend 

3. Instalar dependencias
   
  -npm install

5. Configuracion de Archivo
   
-PORT = 3000

  -Frontend_url =  http://localhost:5173/
  
  -Backent_url = http://localhost:3000

  -Host: 'localhost'

  -User: 'root'

  -Password: 'Sebas2004$'

  -Database: 'conversacion'

4. Iniciar el servidor

  -npm start
  
  -nodemon node app.js

### **Forntend**

1. Ir a la carpete frontend
   
  -cd frontend

2. Instalar dependencias

  -npm install

3. configurar variable de entorno
   
-Backend_url: http://localhost:3000/chat

4.iniciar el servidor

-npm run dev

### Rutas de la Api

1. Metodo POST: En esta parte le mandamos el mensaje al Ia para que nos responde la pregunta que necesitamos

-Url: POST /chat/Mensajes

Body:
{
    "mensaje" : "como estas"
}

Repuesta de la ChatBot:
{
    "respuesta": "¡Hola! Estoy aquí y listo para ayudarte. ¿Y tú, cómo estás?"
}

2. Metodo GET: En esta parte enviamos el mensaje a la IA para obtener la respuesta que necesitamos.

-Url: GET /chat/Historial

json:
    
    {

        "id_message": 1,
        
        "content": "hola",
        
        "sender": "user",
        
        "timestamps": "2025-05-23T19:13:57.000Z"
        
    },
    
    {
        
        "id_message": 2,
        
        "content": "¡Hola! ¿Cómo estás?",
        
        "sender": "bot",
        
        "timestamps": "2025-05-23T19:13:58.000Z"
        
      }

### 👨🏻‍💻 Autor 

Nombre: Sebastian Vallejo 
Rol: Desarrollador Fullstack
Correo: svallejo2345@gmail.com


  
 

 

 

 
