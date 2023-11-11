// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Dados temporários (pode ser substituído por um banco de dados)
const clientes = [];
const instrutores = [];
const treinos = [];

// Rotas da API para a entidade Cliente
app.get('/api/clientes', (req, res) => {
    res.json(clientes);
});

app.get('/api/clientes/:id', (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));
    if (!cliente) return res.status(404).send('Cliente não encontrado.');
    res.json(cliente);
});

app.post('/api/clientes', (req, res) => {
    const cliente = {
        id: clientes.length + 1,
        nome: req.body.nome,
        // Adicione outras propriedades conforme necessário
    };
    clientes.push(cliente);
    res.json(cliente);
});

app.put('/api/clientes/:id', (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));
    if (!cliente) return res.status(404).send('Cliente não encontrado.');

    cliente.nome = req.body.nome;
    // Atualize outras propriedades conforme necessário

    res.json(cliente);
});

app.delete('/api/clientes/:id', (req, res) => {
    const index = clientes.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Cliente não encontrado.');

    const clienteRemovido = clientes.splice(index, 1);
    res.json(clienteRemovido);
});

// Rotas da API para a entidade Instrutor
app.get('/api/instrutores', (req, res) => {
    res.json(instrutores);
});

app.get('/api/instrutores/:id', (req, res) => {
    const instrutor = instrutores.find(i => i.id === parseInt(req.params.id));
    if (!instrutor) return res.status(404).send('Instrutor não encontrado.');
    res.json(instrutor);
});

app.post('/api/instrutores', (req, res) => {
    const instrutor = {
        id: instrutores.length + 1,
        nome: req.body.nome,
        // Adicione outras propriedades conforme necessário
    };
    instrutores.push(instrutor);
    res.json(instrutor);
});

app.put('/api/instrutores/:id', (req, res) => {
    const instrutor = instrutores.find(i => i.id === parseInt(req.params.id));
    if (!instrutor) return res.status(404).send('Instrutor não encontrado.');

    instrutor.nome = req.body.nome;
    // Atualize outras propriedades conforme necessário

    res.json(instrutor);
});

app.delete('/api/instrutores/:id', (req, res) => {
    const index = instrutores.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Instrutor não encontrado.');

    const instrutorRemovido = instrutores.splice(index, 1);
    res.json(instrutorRemovido);
});

// Rotas da API para a entidade Treino
app.get('/api/treinos', (req, res) => {
    res.json(treinos);
});

app.get('/api/treinos/:id', (req, res) => {
    const treino = treinos.find(t => t.id === parseInt(req.params.id));
    if (!treino) return res.status(404).send('Treino não encontrado.');
    res.json(treino);
});

app.post('/api/treinos', (req, res) => {
    const treino = {
        id: treinos.length + 1,
        nome: req.body.nome,
        // Adicione outras propriedades conforme necessário
    };
    treinos.push(treino);
    res.json(treino);
});

app.put('/api/treinos/:id', (req, res) => {
    const treino = treinos.find(t => t.id === parseInt(req.params.id));
    if (!treino) return res.status(404).send('Treino não encontrado.');

    treino.nome = req.body.nome;
    // Atualize outras propriedades conforme necessário

    res.json(treino);
});

app.delete('/api/treinos/:id', (req, res) => {
    const index = treinos.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Treino não encontrado.');

    const treinoRemovido = treinos.splice(index, 1);
    res.json(treinoRemovido);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
