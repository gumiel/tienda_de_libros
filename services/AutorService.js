const AutorRepository = require('../repositories/AutorRepository');

const getAutors = async (from, limit, filters, attributes) => {

    let defaultFilters = {
        // status: true
    }

    if(!filters){
        filters = defaultFilters;
    }else{
        filters = {...defaultFilters, ...filters};
    }

    const data = await AutorRepository.getAutors(from, limit, filters, attributes)
    return data;
}

const addAutor = async ({ nombre, edad, nacionalidad }) => {
    const data = AutorRepository.addAutor({ nombre, edad, nacionalidad });
    return data;
}

const updateAutor = async ({ autorId, nombre, edad, nacionalidad }) => {
    const data = await AutorRepository.updateAutor({ autorId, nombre, edad, nacionalidad });
    return data
}

module.exports = {
    getAutors,
    addAutor,
    updateAutor
}