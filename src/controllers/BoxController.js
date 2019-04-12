/* 
Arquivo responsável por manipular
Os registros criados dentro de Model.
*/

const Box = require('../models/Box'); //Importando o arquivo Box.

//Agora vamos criar uma classe 
class BoxController {
    //Usando o async await com sintaxe.
    async store(req, res) { //Permite ao usuario criar novas pastas.
        


        const box = await Box.create(req.body) //Pega a requisição do Insomnia "req.body"
        
        
        return res.json(box);
        
    }

    async show(req, res) {
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: {createAt: -1  } }
        });

        return res.json(box);
    }
}


module.exports = new BoxController(); //Coloca-se o new pois queremos acessar as instancias da Classe