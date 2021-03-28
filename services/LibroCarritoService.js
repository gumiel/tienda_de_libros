const LibroCarritoRepository = require('../repositories/LibroCarritoRepository')

const addLibroToLibroCarrito = async({ body, carritoId, libroId, cantidad }) => {
    console.log({ libroId, ...body });
    const data = await LibroCarritoRepository.addLibroToLibroCarrito({ carritoId, libroId, cantidad })
    return data;
}

const deleteLibroCarrito = async (id) => {
    const data = await LibroCarritoRepository.deleteLibroCarrito(id);
    return data;
}

module.exports = {
    addLibroToLibroCarrito,
    deleteLibroCarrito,
}
