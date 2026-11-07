import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="p-10 font-display bg-surface min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-primary">Librería CRUD</h1>
      
      <nav className="flex gap-4 mb-8">
        <Link to="/" className="text-secondary hover:underline">Inicio (Lista)</Link>
        <Link to="/crear" className="text-secondary hover:underline">Crear Libro</Link>
        <Link to="/detalle/1" className="text-secondary hover:underline">Detalle Libro 1</Link>
      </nav>

      {/* ACÁ ESTÁ LA MAGIA: Las rutas */}
      <Routes>
        <Route path="/" element={<p className="text-xl">Estás en la LISTA</p>} />
        <Route path="/crear" element={<p className="text-xl">Estás en CREAR</p>} />
        <Route path="/detalle/:id" element={<p className="text-xl">Estás en el DETALLE</p>} />
      </Routes>
    </div>
  );
}

export default App;