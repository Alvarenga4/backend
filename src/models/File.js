/*
Esse arquivo é responsavel por criar a parte das pastas dentro do aplicativo.
Ele permite que o usuario consiga ter a pasta, fazer uploads, entre outros 
recursos.
*/

//Importando o Moongose.
const mongoose = require('mongoose');

//Cirando a constante File.

//Schema é uma tabela que iremos criar dentro do Banco de Dados (MONGODB)
const File = new mongoose.Schema({
    title: //Criando titulo dentro da "File"
    { 
        type: String, //Tipo String
        required: true //Obrigatorio ao usuario.
    },
    path: //Nome do arquivo FISICO armazenado na aplicação.
    {
        type: String,
        required: true
    },
}, {
    timestamps: true, //Faz com que o app crie um campo com "create at"
    toObject: { virtuals: true }, //Faz um calculo e retorna a URL Gerada abaixo.
    toJSON: { virtuals: true }
});

File.virtual('url').get(function() {
    return `http://localhost:3333/files/${encodeURIComponent(this.path)}`;
});

/*Exporta o moongose.model e define o
 model com o nome 'File' e passa 
 o parametro do Schema 'File'. 
 */

module.exports = mongoose.model("File", File);