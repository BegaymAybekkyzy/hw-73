const express = require('express');

const app = express();
const port = 7000;

app.get('/Hello', (req, res) => {
    return res.send('Hello');
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});