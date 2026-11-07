import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LibroList from './pages/LibroList';

function App() {
  return (
    <Routes>
      {/* Layout envuelve a todas las rutas hijas */}
      <Route path="/" element={<Layout />}>
        {/* Ruta principal (Lista) */}
        <Route index element={<LibroList />} />
        
        {/* Estas rutas las crearemos en los siguientes pasos */}
        <Route path="*" element={<p className="mt-10 text-center text-xl">Página en construcción...</p>} />
      </Route>
    </Routes>
  );
}

export default App;