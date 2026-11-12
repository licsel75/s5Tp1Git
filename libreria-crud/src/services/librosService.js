//  Importo la instancia de Axios que configuré anteriormente.
import api from './axiosConfig';

// Defino el endpoint en una constante. 
// Si mañana el recurso en MockAPI cambia de nombre, lo cambio acá .
const ENDPOINT = '/libros';

// READ (Listar todos)
// La ruta completa que se genera es: VITE_API_URL + /libros
// (Ej: https://mi-url.mockapi.io/api/v1/libros)
export const getLibros = async () => {
  const response = await api.get(ENDPOINT);
  return response.data; // Axios me devuelve los datos ya parseados en 'data'
};

//  READ (Ver uno por ID)
// La ruta completa que se genera es: VITE_API_URL + /libros/1 o 2 o 16 
export const getLibroById = async (id) => {
  const response = await api.get(`${ENDPOINT}/${id}`);
  return response.data;
};

//  CREATE (Crear)
// Le pego a la misma ruta base, pero como es un POST, Axios manda los datos en el cuerpo (body)
export const createLibro = async (nuevoLibro) => {
  const response = await api.post(ENDPOINT, nuevoLibro);
  return response.data;
};

//  UPDATE (Editar)
// Uso PUT porque reemplazo el recurso completo en esa ruta específica (/libros/1)
export const updateLibro = async (id, libroActualizado) => {
  const response = await api.put(`${ENDPOINT}/${id}`, libroActualizado);
  return response.data;
};

//  DELETE (Borrar)
// Le pego a la ruta con el ID específico para que MockAPI sepa cuál borrar.
export const deleteLibro = async (id) => {
  const response = await api.delete(`${ENDPOINT}/${id}`);
  return response.data;
};