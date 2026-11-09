import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LibroList from './pages/LibroList';
import LibroCreate from './pages/LibroCreate';
import LibroEdit from './pages/LibroEdit';
import LibroDetail from './pages/LibroDetail'; // importo

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LibroList />} />
        <Route path="crear" element={<LibroCreate />} />
        <Route path="editar/:id" element={<LibroEdit />} />
        
        {/*nueva ruta detalle*/}
        <Route path="libros/:id" element={<LibroDetail />} />
        
        <Route path="*" element={<p className="text-center mt-10 text-xl">Página no encontrada</p>} />
      </Route>
    </Routes>
  );
}

export default App;