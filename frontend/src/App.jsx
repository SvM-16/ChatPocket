import { useEffect, useState } from "react";
import { usePockiContext } from "./Context/ChatContext.jsx";
import { LuSend } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { LuBot } from "react-icons/lu";

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
    <div className="flex flex-col mt-4 max-w-md mx-auto border rounded-lg shadow bg-white">
      <h1 className="text-white text-xl font-bold p-3 bg-blue-600 rounded-t-lg ">Chat Bot</h1>
      
      <div className="flex flex-col p-4 space-y-3 h-96 overflow-y-auto bg-white">
          {Array.isArray(mensajes) &&
            mensajes.map((msg, index) => {
              const esBot = msg.sender.toLowerCase() === "bot";
              const colorClase = esBot ? "bg-gray-200 text-gay-900" : "bg-blue-600 bg-white";
              const Icono = esBot ? LuBot : CiUser;
              const alineacion = esBot ? "justify-start" : "justify-end";
              const iconoPosicion = esBot ? "order-1" : "order-2";
              const mensajePosicion = esBot ? "order-2" : "order-1";

              return (
                <div key={index} className={`flex ${alineacion}`}>
                    <div className="flex items-start gap-2 mb-2">
                      <Icono className={`text-2xl text-gray-700 ${iconoPosicion}`} />
                      <div className={`max-w-xs md:max-w-md p-3 rounded-lg shadow ${colorClase} ${mensajePosicion}`}>
                        <p className="text-base whitespace-pre-wrap">{msg.content}</p>
                      </div>
                    </div>
                  </div>
              );
            })}

          {cargar && (
            <p className="text-center text-gray-500 italic">Cargando respuesta...</p>
          )}
        </div>

          <div className="flex items-center p-1 border-t gap-2">
            <input 
            type="text"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribe tu mensaje..."
            className="h-10 w-95 px-2 py-2 text-lg border-none outline-none"
          />

          <button
            onClick={mensajeEnviado}
            className="ml-1 text-3xl"
          >
            <LuSend />
          </button>
        </div>
      </div>
);

}

export default App;