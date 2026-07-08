const express = require('express');
const frontendRouter = express.Router();

frontendRouter.use(express.static('client'));

const path = require('path');

frontendRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'));
});

module.exports = frontendRouter;