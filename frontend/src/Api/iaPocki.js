import axios from './axios'

export const ObtenerRespuestaIa = (mensaje) => axios.post("/Mensajes", {mensaje} ) 


export const ObtenerHistorialIa = () => axios.get("/Historial")

