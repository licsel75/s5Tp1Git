import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen bg-surface font-display">
      <header className="bg-white shadow-md p-4 mb-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Librería CRUD
          </Link>
          <nav className="flex gap-4">
            <Link to="/" className="text-gray-600 hover:text-primary font-semibold transition-colors">
              Inicio
            </Link>
            <Link to="/crear" className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-secondary transition-colors">
              + Nuevo Libro
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-20">
        {/* 'Outlet' es donde React Router inyecta las páginas hijas */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;