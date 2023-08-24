//  axios nos permite conectarnos a una base datos y hacer peticiones
 import axios from "axios";

export const api = axios.create({
    // De donde vas a tomar los datos
    baseURL: "http://localhost:5000"
 })

export const buscar = async ( url, setData) => {
    // Se dedica a esperar los datos que la funcion api recolecte de la url recibida
    const respuesta = await api.get(url)
    // Guarda esa informacion en data
    setData(respuesta.data)
}