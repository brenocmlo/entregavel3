var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.send('Oi, mundo :-)');
});


app.post('/soma', function(req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);
    res.send(`Resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});


app.post('/subtracao', function(req, res) {
    var body = req.body;
    var resultado = subtrai(body.a, body.b);
    res.send(`Resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});


app.post('/multiplicacao', function(req, res) {
    var body = req.body;
    var resultado = multiplica(body.a, body.b);
    res.send(`Resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});


app.post('/divisao', function(req, res) {
    var body = req.body;

    if (body.b === 0) {
        return res.send('Erro: divisão por zero não é permitida.');
    }

    var resultado = divide(body.a, body.b);
    res.send(`Resultado da divisão de ${body.a} por ${body.b} é ${resultado}`);
});


function soma(a, b) {
    return a + b;
}

function subtrai(a, b) {
    return a - b;
}

function multiplica(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


var port = 2007;
app.listen(port, function() {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
