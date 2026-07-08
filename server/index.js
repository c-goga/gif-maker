const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const routes = require('./routes/routes.js');
app.use(cors());
const PORT = 3000;



app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(routes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
