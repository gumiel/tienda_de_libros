const express = require('express');
const {addLibroToLibroCarrito, deleteLibroCarrito} = require('../services/LibroCarritoService')

const app = express();

/**
 * Agregar libros a un carrito de compras
 */
app.post('/libro_carrito/:carritoId/:libroId',  async(req, res) => {
    try {
        let carritoId = Number(req.params.carritoId);
        let libroId = Number(req.params.libroId);
        let body = req.body;
        
        const data = await addLibroToLibroCarrito({ ...body, carritoId: carritoId, libroId: libroId})
        return res.json({
            libro: carritoId,
            carrito: libroId,
        })

    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
})

/**
 * Eliminar carrito de compras
 */
app.delete('/libro_carrito/:libroCarritoId', async (req, res) => {
    try {

        let id = req.params.libroCarritoId;
        let data = deleteLibroCarrito(id);
        return res.json({
            data
        });
    } catch (e) {
        return res.status(400).json({message:e.message})
    }
})

module.exports = app