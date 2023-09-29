const express = require('express');
const knex = require('./conexao.js');
const rotas = express();


rotas.get('/', (req, res) => {
    const mensagemHTML = `
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #222;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        h1 {
            color: #ffffff;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Acesse: https://wicked-foal-gabardine.cyclic.cloud/escreva-a-resposta-aqui</h1>    
</body>
</html>
`;

    return res.status(200).send(mensagemHTML);
});

rotas.get('/escreva-a-resposta-aqui', (req, res) => {
    const mensagemHTML = `
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #222;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        h1 {
            color: #fff;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Qual é a cor do céu?</h1>    
</body>
</html>
`;
    return res.status(200).send(mensagemHTML);
});

rotas.get('/azul', (req, res) => {
    const mensagemHTML = `
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #222;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        h1 {
            color: #ffffff;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>O que está sempre à sua frente, mas você nunca vê?</h1>    
</body>
</html>
`;
    return res.status(200).send(mensagemHTML);
});

rotas.get('/futuro', (req, res) => {
    const mensagemHTML = `
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #222;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        h1 {
            color: #ffffff;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>O que todos desejam ter, mas quando o têm, desejam compartilhar?</h1>    
</body>
</html>
`;
    return res.status(200).send(mensagemHTML);
});

rotas.get('/segredo', (req, res) => {
    const mensagemHTML = `
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #222;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        h1,h2 {
            color: #ffffff;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Qual é o seu nome?
    <br>
    <br>    
    https://wicked-foal-gabardine.cyclic.cloud/nome/escreva-seu-nome-aqui
    </h1> 
     
</body>
</html>
`;
    return res.status(200).send(mensagemHTML);
});

rotas.get('/nome/:nome', async (req, res) => {
    const nome = req.query;
    try {
        await knex('usuarios').insert({ nome: nome });
        const usuarios = await knex('usuarios');
        return res.status(200).json({
            mensagem: `Obrigada por testarem se meu deploy deu certo.
        ${usuarios}`
        });
    } catch (error) {
        return res.status(500).json(error.message);
    }


});





module.exports = rotas;