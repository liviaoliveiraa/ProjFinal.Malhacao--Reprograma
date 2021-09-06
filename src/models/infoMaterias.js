const mongoose = require("mongoose");

const infoMateriasSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    descrição: {type: String, required: true},
    tarefa: {type: String, required: true},
    dataProva: {type: String, required: true} 
}, {
    versionKey: false
});

const infoMaterias = mongoose.model('infoMaterias', infoMateriasSchema);

module.exports = infoMaterias;






