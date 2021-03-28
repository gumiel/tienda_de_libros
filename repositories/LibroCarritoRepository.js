const Libro_carrito = require("../models").Libro_carrito;
const Carrito = require("../models").Carrito;

const addLibroToLibroCarrito = async ({ carritoId, libroId, cantidad }) => {
    console.log({ carritoId, libroId, cantidad });
    const data = await Libro_carrito.create({
        cantidad: cantidad,
        carritoId: carritoId,
        libroId: libroId
    })
    return data;
}

const deleteLibroCarrito = async (id) => {
    const data = Libro_carrito.destroy({ where: { id: id } });
    return data;
}

module.exports = {
    addLibroToLibroCarrito,
    deleteLibroCarrito,
}


