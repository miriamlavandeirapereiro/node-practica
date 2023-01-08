'use strict';

const express = require('express');
const createError = require('http-errors');
const Anuncio = require('../../models/Anuncio');

const router = express.Router();

// CRUD

// GET /api/Anuncios
// Devuelve una lista de Anuncios
router.get('/', async (req, res, next) => {
    try {

        // filtros
        const nombre = req.query.nombre;
        const venta = req.query.venta;
        const precio = req.query.precio;
        const etiquetas = req.query.etiquetas;
        // paginación
        const skip = req.query.skip;
        const limit = req.query.limit;
        // selección de campos
        const fields = req.query.fields;
        // ordenación
        const sort = req.query.sort;

        const filtro = {};

        if (nombre) {
            filtro.nombre = nombre;
        }

        if (venta) {
            filtro.venta = venta;
        }

        if (precio) {
            filtro.precio = precio;
        }

        if (etiquetas?.length > 0) {
            filtro.etiquetas = etiquetas;
        }

        const Anuncios = await Anuncio.lista(filtro, skip, limit, fields, sort);
        res.json({ results: Anuncios });
    } catch (err) {
        next(err);
    }
});

module.exports = router;