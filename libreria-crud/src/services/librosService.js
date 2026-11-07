import api from './axiosConfig';

// 1. READ (Listar todos)
export const getLibros = async () => {
  const response = await api.get('/libros');
  return response.data; // Axios ya parsea el JSON automáticamente
};

// 2. READ (Ver uno por ID)
export const getLibroById = async (id) => {
  const response = await api.get(`/libros/${id}`);
  return response.data;
};

// 3. CREATE (Crear)
export const createLibro = async (nuevoLibro) => {
  const response = await api.post('/libros', nuevoLibro);
  return response.data;
};

// 4. UPDATE (Editar)
export const updateLibro = async (id, libroActualizado) => {
  const response = await api.put(`/libros/${id}`, libroActualizado);
  return response.data;
};

// 5. DELETE (Borrar)
export const deleteLibro = async (id) => {
  const response = await api.delete(`/libros/${id}`);
  return response.data;
};