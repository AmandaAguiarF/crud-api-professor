const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Importa o middleware cors
const professorRoute = require('./routes/professor');

dotenv.config();

const app = express();

app.use(cors());  // Ativa o CORS para todas as rotas

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI); //conexação com o banco de dados

app.use('/api/professor', professorRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
