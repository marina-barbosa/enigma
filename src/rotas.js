const express = require('express');
const enigmas = require('./controladores/enigmas');

const rotas = express();

// cadastro de usuario
rotas.get('/', (req, res) => {
    return res.status(200).json({ mensgame: '/escreva-a-resposta-aqui' });
});

rotas.get('/escreva-a-resposta-aqui', (req, res) => {
    return res.status(200).json({ mensgame: 'Qual a cor do céu?' });
});

rotas.get('/azul', (req, res) => {
    return res.status(200).json({ mensgame: 'O que está sempre à sua frente, mas você nunca vê?' });
});

rotas.get('/futuro', (req, res) => {
    return res.status(200).json({ mensgame: 'O que todos desejam ter, mas quando o têm, desejam compartilhar?' });
});

rotas.get('/segredo', (req, res) => {
    return res.status(200).json({ mensgame: 'Qual é o seu nome?' });
});

rotas.get('/:nome', async (req, res) => {
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