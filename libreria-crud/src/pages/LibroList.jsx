import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLibros, deleteLibro } from '../services/librosService';

function LibroList() {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargarLibros = async () => {
    try {
      setLoading(true);
      const data = await getLibros();
      setLibros(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarLibros();
  }, []);

  const handleDelete = async (idParaBorrar, titulo) => {
    const confirmado = window.confirm(`¿Seguro que querés borrar "${titulo}"?`);
    if (confirmado) {
      try {
        await deleteLibro(idParaBorrar);
        // Recargamos la lista directamente desde la API para evitar desincronización
        cargarLibros(); 
      } catch (err) {
        console.error("Error al borrar:", err);
        alert('No se pudo borrar. Revisá la consola.');
      }
    }
  };

  if (loading) return <p className="text-center text-xl mt-10">Cargando... ⏳</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-text">Catálogo de Libros</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {libros.map((libro, index) => {
          const titulo = libro.nombre || libro.titulo || libro.title || "Sin título";
          
          // Si el JSON trae ID, usamos ese. Si no, asumimos que es el índice (0 es ID 1, 1 es ID 2)
          const idParaBorrar = libro.id || (index + 1); 

          return (
            <div key={idParaBorrar} className="bg-white p-5 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                <p className="text-xs text-gray-400 mb-2">ID: {idParaBorrar}</p>
                <h3 className="text-xl font-bold text-primary mb-1">{titulo}</h3>
                <p className="text-gray-600 font-semibold mb-2">{libro.autor || libro.author || "Autor desconocido"}</p>
                <p className="text-sm text-gray-500 mb-4">{libro.genero || "Género"} | ${libro.precio || 0}</p>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Link 
                  to={`/libros/${idParaBorrar}`} 
                  className="flex-1 bg-secondary text-white text-center py-2 rounded-lg hover:bg-primary transition-colors"
                >
                  Ver Detalle
                </Link>
                <button 
                  onClick={() => handleDelete(idParaBorrar, titulo)}
                  className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors"
                >
                  🗑️
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LibroList;