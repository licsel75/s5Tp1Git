import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getLibroById, deleteLibro } from '../services/librosService';

function LibroDetail() {
  const { id } = useParams(); // Lee el ID de la URL (/libros/:id)
  const navigate = useNavigate();
  
  const [libro, setLibro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDetalle = async () => {
      try {
        setLoading(true);
        const data = await getLibroById(id);
        setLibro(data);
      } catch (err) {
        setError('No se pudo encontrar el libro.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    cargarDetalle();
  }, [id]);

  const handleDelete = async () => {
    const confirmado = window.confirm(`¿Seguro que querés borrar "${libro.titulo || libro.nombre}"?`);
    if (confirmado) {
      try {
        await deleteLibro(id);
        navigate('/'); // Si borra, vuelve a la lista
      } catch (err) {
        alert('Error al borrar el libro.');
      }
    }
  };

  if (loading) return <p className="text-center text-xl mt-10">Cargando detalles... ⏳</p>;
  if (error) return <p className="text-center text-red-500 text-xl mt-10">{error} ❌</p>;
  if (!libro) return null;

  // MockAPI a veces devuelve 'nombre' o 'titulo' dependiendo de cómo lo cargamos
  const tituloMostrar = libro.titulo || libro.nombre || "Sin título";

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
      <Link to="/" className="text-secondary hover:underline mb-6 inline-block">
        ← Volver al catálogo
      </Link>

      <h1 className="text-4xl font-bold text-primary mb-2">{tituloMostrar}</h1>
      <h2 className="text-xl text-gray-600 mb-6">por {libro.autor || "Autor desconocido"}</h2>

      <div className="grid grid-cols-2 gap-4 mb-8 bg-surface p-4 rounded-lg">
        <div>
          <p className="text-sm text-gray-500 font-bold uppercase">Año</p>
          <p className="text-lg">{libro.anio || "No especificado"}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-bold uppercase">Género</p>
          <p className="text-lg">{libro.genero || "No especificado"}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-bold uppercase">Precio</p>
          <p className="text-2xl font-bold text-primary">${libro.precio || 0}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-bold uppercase">ID del sistema</p>
          <p className="text-lg">{libro.id || id}</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-text mb-2">Sinopsis</h3>
        <p className="text-gray-700 leading-relaxed">
          {libro.sinopsis || "Este libro todavía no tiene una sinopsis cargada."}
        </p>
      </div>

      <div className="flex gap-4 pt-6 border-t border-gray-200">
        <Link
          to={`/editar/${libro.id || id}`}
          className="flex-1 bg-yellow-100 text-yellow-700 text-center py-3 rounded-lg font-bold hover:bg-yellow-200 transition-colors"
        >
          ✏️ Editar este libro
        </Link>
        <button
          onClick={handleDelete}
          className="flex-1 bg-red-100 text-red-600 py-3 rounded-lg font-bold hover:bg-red-200 transition-colors"
        >
          🗑️ Eliminar libro
        </button>
      </div>
    </div>
  );
}

export default LibroDetail;