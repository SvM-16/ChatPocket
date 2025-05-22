import axios from '../Api/Axios'

export const ObtenerRespuestaIa = () => axios.post("/Mensajes", {input})

export const ObtenerHistorialIa = () => axios.get("/Historial")

export const resetearConversacion = () => axios.delete("/Resetear-Chat")