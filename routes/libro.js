const express = require('express')
const { getLibros, deleteLibro, getLibroById, updateLibro, addLibro, addAutorToLibro } = require('../services/LibroService')

const app = express();

/**
 * Listar libros de forma paginada
 */
app.get('/libros', async (req, res) => {
    try{
        let from = Number(req.query.from) || 0
        let limit = Number(req.query.limit) || 50
        console.log(limit);
        const attributes = ["id", "titulo", "descripcion", "precio"]
        const { count, rows } = await getLibros(from, limit, null, attributes)

        return res.json({
            libros: rows,
            count
        })

    }catch(e){
        return res.status(400).json({message: e.message})
    }
})

/**
 * Mostrar un libro por id
 */
app.get('/libro/:libroId', async (req, res)=> {
    try {
        let libroId = req.params.libroId;
        const libro = await getLibroById(libroId);
        return res.json({
            libro
        });
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
});

/**
 * Agregar un nuevo libro
 */
app.post('/libro', async (req, res) => {
    try {
        let body = req.body;
        // console.log(req);
        const libro = await addLibro({ ...body });
        return res.json({ libro: libro })
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
});

/**
 * Modificar un libro
 */
app.put('/libro/:libroId', async(req, res) => {
    try{
        let libroId = req.params.libroId;
        let body = req.body;
        const libro = await updateLibro({ libroId, ...body})
        return res.json(libro)
    }catch(e){
        return res.status(400).json({message: e.message})
    }
})

/**
 * Eliminar un libro
 */
app.delete('/libro/:libroId', async (req, res) => {
    try {
        let libroId = req.params.libroId;
        const libroDeleted = await deleteLibro(libroId);
        return res.json({ librosEliminados: libroDeleted })
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
});

/**
 * Agregar autor al libro
 */
app.put('/autor_to_libro/:libroId', async(req, res) => {
    try{
        let libroId = req.params.libroId;
        let body = req.body;
        
        const libro = await addAutorToLibro({ libroId, ...body})
        return res.json(libro)
    }catch(e){
        return res.status(400).json({message: e.message})
    }
})

module.exports = app


