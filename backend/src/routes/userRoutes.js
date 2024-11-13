const express = require('express');
const router = express.Router();

// Rota temporária para teste
router.get('/', (req, res) => {
    res.json({ message: 'Rota de usuários funcionando' });
});

module.exports = router;
