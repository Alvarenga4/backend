/* 
Arquivo responsável por manipular
Os registros criados dentro de Model.
*/
const Box = require('../models/Box');
const File = require('../models/File'); //Importando o arquivo File.

//Agora vamos criar uma classe 
class FileController {
    async store(req, res) {
        const box = await Box.findById(req.params.id);

        const file = await File.create({
            title: req.file.originalname, //Nome do arquivo que o usuario subiu na aplicação
            path: req.file.key, //É o caminho que geramos dentro no multerConfig
        })

        box.files.push(file); //inclui uma nova inf dentro da array do box files.

        await box.save(); //Await na frente por ser assincrono.

        req.io.sockets.in(box._id).emit('file', file);

        return res.json(file); //Retorna em formato Json o File que acabou de ser criado.
    }
}
    
module.exports = new FileController();


