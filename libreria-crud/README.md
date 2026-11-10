# Librería CRUD - Catamarca Lee

🔗 **Demo en vivo:** [Pegá acá tu link de Netlify cuando lo tengas, ej: https://libreria-crud-hector.netlify.app/]

## Qué es
Una aplicación web tipo panel de administración para gestionar un catálogo de libros. Permite listar los libros disponibles, ver el detalle de cada uno, agregar nuevos libros, editarlos y eliminarlos. Es un CRUD completo (Create, Read, Update, Delete) construido con React.

## Recurso administrado y API
- **Recurso:** Libros (con campos como título, autor, año, género, precio y sinopsis).
- **API:** [MockAPI](https://mockapi.io/) - Se utilizó para simular un backend real, permitiendo persistir los datos y hacer las peticiones HTTP.

## Cómo correrlo
1. Clonar el repositorio.
2. Instalar dependencias: `pnpm install`
3. Crear un archivo `.env` en la raíz con la URL de tu MockAPI:
   ```env
   VITE_API_URL=https://tu-url-de-mockapi.mockapi.io/api/v1


Decisiones de Arquitectura y Tecnologías
React Router: Lo usé para la navegación. En lugar de simular pantallas con useState, tengo rutas reales (/, /crear, /editar/:id, /libros/:id). Usé useParams para leer los IDs y useNavigate para redireccionar al usuario después de una acción.

Capa de API (Axios): Separé toda la lógica de peticiones en la carpeta services/. El archivo axiosConfig.js crea la instancia con la URL base del .env, y librosService.js contiene las funciones (getLibros, createLibro, etc.). Los componentes no saben cómo se hace la petición, solo llaman a la función.

React Hook Form: Lo usé para manejar los formularios de Crear y Editar. Me permitió validar los campos (ej: precio y título obligatorios) y usar setValue para precargar los datos en el formulario de edición.

Manejo de errores y carga: Todas las peticiones tienen su estado de loading (para mostrar un spinner de "Cargando...") y su estado de error (por si MockAPI falla).

Feedback al usuario: Para confirmar las acciones de crear, editar y borrar, utilicé el alert() nativo del navegador (porque cumplen el requisito sin sobrecomplicar la arquitectura). Y antes de borrar, siempre pido confirmación con window.confirm.

Uso de IA
Qué generé con IA: Usé IA para entender cómo estructurar la capa de servicios con Axios, para repasar cómo funciona useParams de React Router, y para resolver un conflicto de dependencias que rompía los hooks de React al principio.

Qué corregí a mano: Toda la lógica de los formularios, el manejo de los IDs que a veces no devuelve MockAPI, los estados de carga y error, y los estilos de Tailwind.

**Demo en vivo:** [https://libreria-crud.netlify.app/]
