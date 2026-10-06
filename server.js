const express = require('express');
const cors = require('cors'); // 1. Importe o CORS
const app = express();

app.use(cors()); // 2. Ative o CORS antes de definir as rotas!
app.use(express.json()); // Garante que o servidor entenda o POST (JSON)