const express = require('express'); //Importa o Express
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router(); //Cria uma variavel routes que ussa a função Router.

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

// GET(buscar) /POST(criar algo) /PUT(Inserir) /DELETE(deletar)

routes.post(
    '/box', 
    BoxController.store );

routes.get("/box/:id", BoxController.show);

routes.post(
    '/box/:id/files', 
    multer(multerConfig).single('file'), 
    FileController.store );

module.exports = routes; //Importa o routes criado.