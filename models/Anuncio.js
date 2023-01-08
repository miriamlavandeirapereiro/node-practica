'use strict';

const mongoose = require('mongoose');

const anuncioSchema = mongoose.Schema({
    nombre: { type: String, unique: true, index: true },
    venta: { type: Boolean, index: true },
    precio: { type: Number, index: true },
    foto: { type: String },
    etiquetas: { type: [String], index: true }
});

anuncioSchema.statics.lista = function (filtro, skip, limit, campos, sort) {
    const query = Anuncio.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.select(campos);
    query.sort(sort);
    return query.exec()
}

// crear el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

// exportar el modelo
module.exports = Anuncio;