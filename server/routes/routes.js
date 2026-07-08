const express = require('express');
const router = express.Router();

const frontendRouter = require('./FrontendRoutes');
const apiRouter = require('./APIRoutes');

router.use(frontendRouter);
router.use('/api', apiRouter);

module.exports = router;