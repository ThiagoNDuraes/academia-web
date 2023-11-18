const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API da Academia',
      version: '1.0.0',
      description: 'Documentação da API da Academia',
    },
  },

  apis: ['./server.js'],
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Dados temporários
const clientes = [];
const instrutores = [];
const treinos = [];

// Rotas da API para a entidade Cliente
/**
 * @swagger
 * /api/clientes:
 *   get:
 *     description: Retorna todos os clientes
 *     responses:
 *       200:
 *         description: Sucesso
 */
app.get('/api/clientes', (req, res) => {
  res.json(clientes);
});

/**
 * @swagger
 * /api/clientes/{id}:
 *   get:
 *     description: Retorna um cliente pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do cliente
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Cliente não encontrado
 */
app.get('/api/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  if (!cliente) return res.status(404).send('Cliente não encontrado.');
  res.json(cliente);
});

/**
 * @swagger
 * /api/clientes:
 *   post:
 *     description: Cria um novo cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
app.post('/api/clientes', (req, res) => {
  const cliente = {
    id: clientes.length + 1,
    nome: req.body.nome,
  };
  clientes.push(cliente);
  res.json(cliente);
});

/**
 * @swagger
 * /api/clientes/{id}:
 *   put:
 *     description: Atualiza um cliente pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do cliente
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Cliente não encontrado
 */
app.put('/api/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  if (!cliente) return res.status(404).send('Cliente não encontrado.');
  cliente.nome = req.body.nome;
  res.json(cliente);
});

/**
 * @swagger
 * /api/clientes/{id}:
 *   delete:
 *     description: Exclui um cliente pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do cliente
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Cliente não encontrado
 */
app.delete('/api/clientes/:id', (req, res) => {
  const index = clientes.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Cliente não encontrado.');
  const clienteRemovido = clientes.splice(index, 1);
  res.json(clienteRemovido);
});

// Rotas da API para a entidade Instrutor
/**
 * @swagger
 * /api/instrutores:
 *   get:
 *     description: Retorna todos os instrutores
 *     responses:
 *       200:
 *         description: Sucesso
 */
app.get('/api/instrutores', (req, res) => {
  res.json(instrutores);
});

/**
 * @swagger
 * /api/instrutores/{id}:
 *   get:
 *     description: Retorna um instrutor pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do instrutor
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Instrutor não encontrado
 */
app.get('/api/instrutores/:id', (req, res) => {
  const instrutor = instrutores.find(i => i.id === parseInt(req.params.id));
  if (!instrutor) return res.status(404).send('Instrutor não encontrado.');
  res.json(instrutor);
});

/**
 * @swagger
 * /api/instrutores:
 *   post:
 *     description: Cria um novo instrutor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
app.post('/api/instrutores', (req, res) => {
  const instrutor = {
    id: instrutores.length + 1,
    nome: req.body.nome,
  };
  instrutores.push(instrutor);
  res.json(instrutor);
});

/**
 * @swagger
 * /api/instrutores/{id}:
 *   put:
 *     description: Atualiza um instrutor pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do instrutor
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Instrutor não encontrado
 */
app.put('/api/instrutores/:id', (req, res) => {
  const instrutor = instrutores.find(i => i.id === parseInt(req.params.id));
  if (!instrutor) return res.status(404).send('Instrutor não encontrado.');
  instrutor.nome = req.body.nome;
  res.json(instrutor);
});

/**
 * @swagger
 * /api/instrutores/{id}:
 *   delete:
 *     description: Exclui um instrutor pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do instrutor
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Instrutor não encontrado
 */
app.delete('/api/instrutores/:id', (req, res) => {
  const index = instrutores.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Instrutor não encontrado.');
  const instrutorRemovido = instrutores.splice(index, 1);
  res.json(instrutorRemovido);
});

// Rotas da API para a entidade Treino
/**
 * @swagger
 * /api/treinos:
 *   get:
 *     description: Retorna todos os treinos
 *     responses:
 *       200:
 *         description: Sucesso
 */
app.get('/api/treinos', (req, res) => {
  res.json(treinos);
});

/**
 * @swagger
 * /api/treinos/{id}:
 *   get:
 *     description: Retorna um treino pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do treino
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Treino não encontrado
 */
app.get('/api/treinos/:id', (req, res) => {
  const treino = treinos.find(t => t.id === parseInt(req.params.id));
  if (!treino) return res.status(404).send('Treino não encontrado.');
  res.json(treino);
});

/**
 * @swagger
 * /api/treinos:
 *   post:
 *     description: Cria um novo treino
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
app.post('/api/treinos', (req, res) => {
  const treino = {
    id: treinos.length + 1,
    nome: req.body.nome,
  };
  treinos.push(treino);
  res.json(treino);
});

/**
 * @swagger
 * /api/treinos/{id}:
 *   put:
 *     description: Atualiza um treino pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do treino
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Treino não encontrado
 */
app.put('/api/treinos/:id', (req, res) => {
  const treino = treinos.find(t => t.id === parseInt(req.params.id));
  if (!treino) return res.status(404).send('Treino não encontrado.');
  treino.nome = req.body.nome;
  res.json(treino);
});

/**
 * @swagger
 * /api/treinos/{id}:
 *   delete:
 *     description: Exclui um treino pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do treino
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Treino não encontrado
 */
app.delete('/api/treinos/:id', (req, res) => {
  const index = treinos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Treino não encontrado.');
  const treinoRemovido = treinos.splice(index, 1);
  res.json(treinoRemovido);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
