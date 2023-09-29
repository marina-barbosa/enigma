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
    const nome = req.params.nome;
    try {
        await knex('usuarios').insert({ nome: nome });
        const usuarios = await knex('usuarios');

        let tabelaHTML = `
        <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #222;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        color: #ffffff;
                        text-align: center;
                    }
                    h2 {
                        color: #ffffff;
                    }
                    table {
                        margin-top: 20px; /* Adicione um espaço entre o h2 e a tabela */
                    }
                    th, td {
                        padding: 8px;
                        text-align: center;
                    }
                    th {
                        background-color: #333;
                    }
                    tr:nth-child(even) {
                        background-color: #444;
                    }
                </style>
            </head>
            <body>
                <h2>Obrigada por testarem se meu deploy funcionou <3</h2>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
            </body>
        </html>
        `;

        usuarios.forEach(usuario => {
            tabelaHTML += `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
            </tr>
            `;
        });

        tabelaHTML += `
        </table>
        `;

        return res.status(200).send(tabelaHTML);


    } catch (error) {
        return res.status(500).json(error.message);
    }
});





module.exports = rotas;