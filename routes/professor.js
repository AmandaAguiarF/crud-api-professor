const express = require('express');
const router = express.Router();
const Professor = require('../models/Professor');

router.post('/', async (req, res) => {
    try {
        const { nome, disciplina } = req.body; // Certifique-se de usar os nomes corretos
        const newProfessor = new Professor({ nome, disciplina });
        await newProfessor.save();
        res.json(newProfessor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Listar todos os professores
router.get('/', async (req, res) => {
    const professors = await Professor.find();
    res.json(professors);  // Use 'professors' em vez de 'professores'
});

// Atualizar um professor
router.put('/:id', async (req, res) => {
    const { nome, disciplina } = req.body; // Altere 'area' para 'disciplina' para manter consistência com o schema
    const updatedProfessor = await Professor.findByIdAndUpdate(req.params.id, { nome, disciplina }, { new: true });
    res.json(updatedProfessor);
});

// Deletar um professor
router.delete('/:id', async (req, res) => {
    await Professor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Professor deletado com sucesso!' });
});

module.exports = router;
