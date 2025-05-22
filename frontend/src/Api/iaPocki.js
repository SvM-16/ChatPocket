import axios from '../Api/Axios'

export const ObtenerRespuestaIa = () => axios.post("/Mensajes", {input})

export const ObtenerHistorialIa = () => axios.get("/Historial")

