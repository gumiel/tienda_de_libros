const Libro = require('../models').Libro;

const getLibros = async (from, limit, filters, attributes) => {

    const data = await Libro.findAndCountAll({
        limit,
        offset: from,
        where: filters,
        attributes
    });

    return data;
}

const getLibroById = async (id) => {

    const libro = await Libro.findOne({ where: { id } });
    return libro;
}

const updateLibro = async ({ libroId, titulo, descripcion, precio }) => {
    const libro = await Libro.update(
        { titulo, descripcion, precio },
        { where: { id: libroId } }
    );
    return libro;
}

const deleteLibro = async (id) => {
    const cantidadAfectados = await Libro.destroy({ where: { id } })
    return cantidadAfectados;
}

const addLibro = async ({ titulo, descripcion, precio }) => {
    const libro = await Libro.create({
        titulo,
        descripcion,
        precio
    });
    return libro;
}

const addAutorToLibro = async ({ libroId, autorId }) => {
    const libro = await Libro.update(
        { autorId },
        { where: { id: libroId } }
    );
    return libro;
}

module.exports = {
    getLibros,
    deleteLibro,
    getLibroById,
    updateLibro,
    addLibro,
    addAutorToLibro
}