//Importando as dependencias 
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors')

//Criando a constante do APP usando a função express
const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);
//Comando abaixo conecta o usuario em uma sala isolada dentro do aplicativo.
io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
});

//Conectando a DATABASE MongoDB ATLAS.
mongoose.connect("mongodb+srv://omnistack:arena200@cluster0-zqwz7.mongodb.net/omnistack?retryWrites=true",
    //Esse objeto faz com que o servidor entenda que um tipo novo de conexão usando URL.
    {
    useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;

    return next();
});


//Usando o Json para converter os dados do banco de dados para API.
app.use(express.json());

//Permite ao cliente fazer UPLOADS de Arquivos pro DATABASE dentro do APP.
app.use(express.urlencoded({ extended:true }));

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

//Ativa a rotas para o cliente poder acessar.
app.use(require('./routes'));

//Difine a porta que o servidor ira rodar.
server.listen(3333);