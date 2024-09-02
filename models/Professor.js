const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    disciplina: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Professor', professorSchema);
