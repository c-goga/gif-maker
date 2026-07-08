const express = require('express');
const multer = require('multer');
const apiRouter = express.Router();

apiRouter.use(express.json());

const upload = multer({dest: 'uploads/'});

apiRouter.post('/upload/video', upload.single('video'), (req, res) => {
    console.log('SUBMIT');
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.status(200).send({message: 'File saved to server.'})
});

module.exports = apiRouter;