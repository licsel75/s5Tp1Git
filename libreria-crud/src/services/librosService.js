import api from './axiosConfig';

// Definimos el endpoint una sola vez por si cambia el nombre en el futuro
const ENDPOINT = '/libros';

// 1. READ (Listar todos)
export const getLibros = async () => {
  const response = await api.get(ENDPOINT);
  return response.data;
};

// 2. READ (Ver uno por ID)
export const getLibroById = async (id) => {
  const response = await api.get(`${ENDPOINT}/${id}`);
  return response.data;
};

// 3. CREATE (Crear)
export const createLibro = async (nuevoLibro) => {
  // Axios convierte automáticamente el objeto a JSON
  const response = await api.post(ENDPOINT, nuevoLibro);
  return response.data;
};

// 4. UPDATE (Editar)
export const updateLibro = async (id, libroActualizado) => {
  // Usamos PUT para reemplazar el recurso completo
  const response = await api.put(`${ENDPOINT}/${id}`, libroActualizado);
  return response.data;
};

// 5. DELETE (Borrar)
export const deleteLibro = async (id) => {
  const response = await api.delete(`${ENDPOINT}/${id}`);
  return response.data;
};