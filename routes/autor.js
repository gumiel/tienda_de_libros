const express = require('express');
const { getAutors, addAutor, updateAutor } = require('../services/AutorService')

const app = express();

/**
 * Listar autores de forma paginada
 */
app.get('/autors', async (req, res) => {

    try {
        let from = Number(req.query.from) || 0;
        let limit = Number(req.query.limit) || 5;
        const attributes = ["id", "nombre", "edad", "nacionalidad"]
        const { count, rows } = await getAutors(from, limit, null, attributes)

        return res.json({
            autors: rows,
            count
        })
    } catch (e) {
        console.log(e);
        return res.status(400).json({ message: e.message })
    }

})

/**
 * Agregar un nuevo autor
 */
app.post('/autor', async (req, res)=>{
    try{

        const body = req.body;
        const autor = await addAutor({ ...body });
        return res.json({ autor: autor});

    } catch(e){
        return res.status(400).json({message: e.message});
    }
})

/**
 * Modificar un autor
 */
app.put('/autor/:autorId', async (req, res) => {
    try {
        let autorId = req.params.autorId;
        let body = req.body;
        const autor = await updateAutor({ autorId, ...body })
        return res.json(autor)
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
})


module.exports = app;