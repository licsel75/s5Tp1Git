import axios from 'axios';

// Creamos una instancia de axios configurada
const api = axios.create({
  // Usamos la variable de entorno para no hardcodear la URL
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;