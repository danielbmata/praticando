const express = require('express');
const router = express.Router();

// Rota temporária para teste
router.get('/', (req, res) => {
    res.json({ message: 'Rota de cidades funcionando' });
});

// Buscar estados
router.get('/states', async (req, res) => {
    try {
        res.json(['SP', 'RJ', 'MG']); // Temporário para teste
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Buscar cidades por estado
router.get('/by-state/:state', async (req, res) => {
    try {
        res.json(['Cidade 1', 'Cidade 2']); // Temporário para teste
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
