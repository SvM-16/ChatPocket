import { Children, createContext, useContext, useState } from "react";
import { ObtenerHistorialIa, ObtenerRespuestaIa, resetearHistorial} from '../Api/iaPocki'

const ChatContext = createContext();

export const usePockiContext = () => {
    const context = useContext(pockiContext);
    if(!context) {
        throw new Error ("usePockiContext must be used within a PockiProvider")
    }
    return context;
};

export const PockiProvider = ({ Children }) => {
    const [Historial, setHistorial] = useState([]);
    const [RespuestaIa, setRespuestaIa] = useState([]);
    const [Cargando, setCargar] = useState(false);


const HistorialIa = async () => {
    try {
        const res = await ObtenerHistorialIa();
        setHistorial(data);
        console.log(res)
    } catch (error) {
        console.log("Error al obtener el Historial", error)
    }
}

const ObtenerRespuestas = async () => {
    setCargar(true)
    try {
        const res = await ObtenerRespuestaIa(input);
        setRespuestaIa(res.data);
        setCargar(false)
    } catch (error) {
        console.log("Error al obtener una respuesta")
    }
}

const reseteoHistorial = async () => {
    try {
        await resetearHistorial();
        setHistorial([]);
        setRespuestaIa([]);
        await ObtenerHistorialIa();
    } catch (error) {
        console.log("Error al resetar el Chat", error)
    }
}

return (
    <ChatContext.Provider 
    value={{
        HistorialIa,
        ObtenerRespuestas,
        reseteoHistorial,
        Historial, 
        RespuestaIa, 
        Cargando
    }}>
        {Children}
    </ChatContext.Provider>
);
}