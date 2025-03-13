const express = require('express');

const app = express();
const port = 7000;
const Vigenere = require('caesar-salad').Vigenere;
const password = "cat";

app.get('/Hello', (req, res) => {
    return res.send('Hello');
});

app.get(`/encode/${password}`, (req, res) => {
    return res.send(Vigenere.Cipher(password).crypt(password));
});

app.get('/decode/:cipher', (req, res) => {
    return res.send(Vigenere.Decipher(password).crypt(req.params.cipher));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});