const express = require('express');
const router = express.Router();

// Rota temporária para teste
router.get('/', (req, res) => {
    res.json({ message: 'Rota de mensagens funcionando' });
});

module.exports = router;
