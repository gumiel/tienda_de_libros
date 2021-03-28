const LibroReposotory = require('../repositories/LibroReposotory');

const getLibros = async (from, limit, filters, attributes) => {

    let defaultFilters = {
        // status: true
    }

    if (!filters) {
        filters = defaultFilters;
    } else {
        filters = { ...defaultFilters, ...filters };
    }

    const data = await LibroReposotory.getLibros(from, limit, filters, attributes)
    return data;
}

const getLibroById = async (id) => {
    return await LibroReposotory.getLibroById(id);
}

const deleteLibro = async (id) => {
    const data = await LibroReposotory.deleteLibro(id)
    return data;
}

const updateLibro = async ({ libroId, titulo, descripcion, precio }) => {
    const data = await LibroReposotory.updateLibro({ libroId, titulo, descripcion, precio });
    return data
}

const addLibro = async ({ titulo, descripcion, precio }) => {
    const data = await LibroReposotory.addLibro({ titulo, descripcion, precio });
    // console.log(data);
    return data;
};

const addAutorToLibro = async ({ libroId, autorId }) => {
    const data = await LibroReposotory.addAutorToLibro({ libroId, autorId });
    return data
}

module.exports = {
    getLibros,
    deleteLibro,
    getLibroById,
    updateLibro,
    addLibro,
    addAutorToLibro
}