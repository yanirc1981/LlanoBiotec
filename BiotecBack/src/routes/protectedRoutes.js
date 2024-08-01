const { Router } = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard', user: req.user });
});

module.exports = router;