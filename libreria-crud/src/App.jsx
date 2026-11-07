import { useState, useEffect } from 'react';
import { getLibros } from './services/librosService';

function App() {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarLibros = async () => {
      try {
        const data = await getLibros();
        setLibros(data);
      } catch (err) {
        setError('No se pudieron cargar los libros');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    cargarLibros();
  }, []);

  if (loading) return <p className="p-10 text-xl">Cargando libros... ⏳</p>;
  if (error) return <p className="p-10 text-xl text-red-500">{error} ❌</p>;

  return (
    <div className="p-10 font-display bg-surface min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-primary">Mis Libros (Prueba de Axios)</h1>
      
      <ul className="flex flex-col gap-4">
        {libros.map((libro) => (
          <li key={libro.id} className="bg-white p-4 rounded shadow border">
            <h2 className="font-bold text-lg">{libro.titulo}</h2>
            <p className="text-gray-600">{libro.autor} ({libro.anio})</p>
            <p className="text-primary font-bold">${libro.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;