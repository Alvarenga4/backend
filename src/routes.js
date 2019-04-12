const express = require('express'); //Importa o Express
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router(); //Cria uma variavel routes que ussa a função Router.

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

// GET(buscar) /POST(criar algo) /PUT(Inserir) /DELETE(deletar)

routes.post(
    '/boxes', 
    BoxController.store );

routes.get("/boxes/:id", BoxController.show);

routes.post(
    '/boxes/:id/files', 
    multer(multerConfig).single('file'), 
    FileController.store );

module.exports = routes; //Importa o routes criado.