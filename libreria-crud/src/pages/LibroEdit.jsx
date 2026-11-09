import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getLibroById, updateLibro } from '../services/librosService';

function LibroEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [errorApi, setErrorApi] = useState(null);
    const [cargando, setCargando] = useState(true);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm();

    useEffect(() => {
        const cargarLibro = async () => {
            try {
                const libro = await getLibroById(id);
                setValue('titulo', libro.titulo);
                setValue('autor', libro.autor);
                setValue('anio', libro.anio);
                setValue('genero', libro.genero);
                setValue('precio', libro.precio);
                setValue('sinopsis', libro.sinopsis);
                setCargando(false);
            } catch (err) {
                setErrorApi('No se pudo cargar el libro.');
                setCargando(false);
            }
        };
        cargarLibro();
    }, [id, setValue]);

    const onSubmit = async (data) => {
        try {
            setErrorApi(null);
            const libroFormateado = {
                ...data,
                anio: Number(data.anio),
                precio: Number(data.precio)
            };
            await updateLibro(id, libroFormateado);
            
            alert("Libro editado correctamente ✅"); 
            navigate('/');
        } catch (err) {
            setErrorApi('Hubo un error al guardar los cambios.');
            console.error(err);
        }
    };

    if (cargando) return <p className="text-center mt-10">Cargando datos del libro... ⏳</p>;

    return (
        <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-primary">Editar Libro</h2>

            {errorApi && <p className="bg-red-100 text-red-600 p-3 rounded mb-4">{errorApi}</p>}

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-semibold mb-1">Título *</label>
                    <input
                        type="text"
                        {...register('titulo', { required: 'El título es obligatorio' })}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    {errors.titulo && <p className="text-red-500 text-sm mt-1">{errors.titulo.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-1">Autor *</label>
                    <input
                        type="text"
                        {...register('autor', { required: 'El autor es obligatorio' })}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    {errors.autor && <p className="text-red-500 text-sm mt-1">{errors.autor.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-1">Año</label>
                    <input
                        type="number"
                        {...register('anio')}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-1">Género</label>
                    <input
                        type="text"
                        {...register('genero')}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-1">Precio ($) *</label>
                    <input
                        type="number"
                        {...register('precio', { required: 'El precio es obligatorio' })}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    {errors.precio && <p className="text-red-500 text-sm mt-1">{errors.precio.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-1">Sinopsis</label>
                    <textarea
                        rows="3"
                        {...register('sinopsis')}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                    ></textarea>
                </div>

                <div className="flex gap-4 mt-6">
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-primary text-white py-2 rounded-lg font-bold hover:bg-secondary transition-colors disabled:opacity-50"
                    >
                        {isSubmitting ? 'Guardando...' : 'Guardar Cambios'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LibroEdit;