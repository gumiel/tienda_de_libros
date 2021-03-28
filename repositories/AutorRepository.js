const Autor = require('../models').Autor;

const getAutors = async (from, limit, filters, attributes) => {
    
    const data = await Autor.findAndCountAll({
        limit,
        offset: from,
        where: filters,
        attributes
    });

    return data;
}

const addAutor = async ({nombre, edad, nacionalidad}) => {
    const data = Autor.create({
        nombre,
        edad,
        nacionalidad
    })
    return data;
}

const updateAutor = async ({ autorId, nombre, edad, nacionalidad }) => {
    const autor = await Autor.update(
        { autorId, nombre, edad, nacionalidad },
        { where: { id: autorId } }
    );
    return autor;
}

module.exports = {
    getAutors,
    addAutor,
    updateAutor
}