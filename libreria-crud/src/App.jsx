import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LibroList from './pages/LibroList';
import LibroCreate from './pages/LibroCreate'; //  importo LibroCreate

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LibroList />} />
        {/*  agrego LibroCreate*/}
        <Route path="crear" element={<LibroCreate />} /> 
        <Route path="*" element={<p className="text-center mt-10 text-xl">Página no encontrada</p>} />
      </Route>
    </Routes>
  );
}

export default App;