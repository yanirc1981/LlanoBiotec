const { Router } = require('express');

const router = Router();

router.use('/auth', require('./authRouter'));

router.use('/siigo', require('./siigoRouter'));

module.exports = router;
