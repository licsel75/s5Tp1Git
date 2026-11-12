//  Importo la librería de Axios.
import axios from 'axios';

//  Creo una instancia personalizada de Axios. 
//  en lugar de usar 'axios.get' directamente, 
// configuro una sola vez la URL base y los headers para todas las peticiones.
const api = axios.create({
  
  //  Le paso la URL base de mi API de MockAPI.  
  // Uso 'import.meta.env.VITE_API_URL' que lee la variable del archivo .env (en local)   
  baseURL: import.meta.env.VITE_API_URL,

  //  Le aviso a la API que los datos que voy a enviar y recibir son formato JSON.
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api;