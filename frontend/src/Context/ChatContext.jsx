import { createContext, useContext, useState } from "react";
import { ObtenerHistorialIa, ObtenerRespuestaIa } from '../Api/iaPocki';

// Crear el contexto
const ChatContext = createContext();

// Hook personalizado para usar el contexto
export const usePockiContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("usePockiContext debe usarse dentro de un PockiProvider");
  }
  return context;
};

// Proveedor del contexto
export const PockiProvider = ({ children }) => {
  const [Historial, setHistorial] = useState([]);
  const [RespuestaIa, setRespuestaIa] = useState([]);
  const [cargando, setCargando] = useState(false);


  const HistorialIa = async () => {
    try {
      const res = await ObtenerHistorialIa();
      const data = res.data;
      setHistorial(data);
      console.log("Historial obtenido:", data);
    } catch (error) {
      console.error("Error al obtener el historial:", error);
    }
  };

  const ObtenerRespuesta = async (input) => {
    setCargando(true);
    console.log(input)
    try {
      const res = await ObtenerRespuestaIa(input);
      const data = res.data
  
      await HistorialIa();
   
    } catch (error) {
      console.error("Error al obtener una respuesta de la IA:", error);
     
    } finally {
      setCargando(false);
      
    }
  };

  return (
    <ChatContext.Provider
      value={{
        HistorialIa,
        ObtenerRespuesta,
        Historial,
        RespuestaIa,
        cargar: cargando,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
