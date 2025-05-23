import { useEffect, useState } from "react";
import { usePockiContext } from "./Context/ChatContext.jsx";

function App() {
  const {
    HistorialIa,
    ObtenerRespuesta,
    Historial,
    cargar,
  } = usePockiContext();

  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    const cargarChat = async () => {
      try {
        await HistorialIa();
      } catch (error) {
        console.log("Error al obtener el historial", error);
      }
    };

    cargarChat();
  }, []);

  useEffect(() => {
    // Cuando el historial cambia, lo usamos como base de mensajes
    setMensajes(Historial);
  }, [Historial]);


  

  const mensajeEnviado = async () => {
  if (!mensaje.trim()) return;

  const mensajeUsuario = { sender: "User", content: mensaje };

  setMensajes(prev => Array.isArray(prev) ? [...prev, mensajeUsuario] : [mensajeUsuario]);

  setMensaje("");

  try {
    const respuesta = await ObtenerRespuesta(mensajeUsuario.content);
    const mensajeIa = { sender: "Bot", content: respuesta };
    setMensajes(prev => Array.isArray(prev) ? [...prev, mensajeIa] : [mensajeIa]);
  } catch (error) {
    console.log("Error al obtener la respuesta de la IA:", error);
  }
  };

    return (
  <div style={{ padding: "20px", fontFamily: "Arial" }}>
    <h1>Chat con IA</h1>
    
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        height: "300px",
        overflowY: "scroll",
        marginBottom: "10px",
      }}
    >
      {Array.isArray(mensajes) &&
        mensajes.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === "User" ? "right" : "left",
              margin: "5px 0",
            }}
          >
            <strong>{msg.sender}:</strong> {msg.content}
          </div>
        ))
      }

      {cargar && <p><em>Cargando respuesta...</em></p>}
    </div>

    <input
      type="text"
      value={mensaje}
      onChange={(e) => setMensaje(e.target.value)}
      placeholder="Escribe tu mensaje..."
      style={{ width: "70%", padding: "8px" }}
    />

    <button
      onClick={mensajeEnviado}
      style={{ padding: "8px 12px", marginLeft: "10px" }}
    >
      Enviar
    </button>
  </div>
);

}

export default App;
