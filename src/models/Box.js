/*
Esse arquivo é responsavel por criar a parte das pastas dentro do aplicativo.
Ele permite que o usuario consiga ter a pasta, fazer uploads, entre outros 
recursos.
*/

//Importando o Moongose.
const mongoose = require('mongoose');

//Cirando a constante Box.

//Schema é uma tabela que iremos criar dentro do Banco de Dados (MONGODB)
const Box = new mongoose.Schema({
    title: //Criando titulo dentro da "box"
    { 
        type: String, //Tipo String
        required: true //Obrigatorio ao usuario.
    },
    // Lista de Arquivos dentro da Box. (Vetor). Pode ser Array, Objetc...
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File"}] 

}, {
    timestamps: true //Faz com que o app crie um campo com "create at"
});

/*Exporta o moongose.model e define o
 model com o nome 'Box' e passa 
 o parametro do Schema 'Box'. 
 */

module.exports = mongoose.model("Box", Box);