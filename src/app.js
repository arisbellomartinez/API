const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 8080


app.use(morgan("dev"));
app.use(express.json());

//Routes

app.get('/', (req, res) => {
    res.send('Welcome')
})
app.post('/', (req, res) => {
    res.send('Metodo post')
})

app.put('/', (req, res) => {
    res.send('Metodo put')
})

app.delete('/', (req, res) => {
    res.send('Metodo delete')
})











app.listen(port);