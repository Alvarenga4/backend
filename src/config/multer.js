/* 
O multer é uma biblioteca para configuração do servidor. Ela permite ao usuario 
Upar arquivos. Foi instalo usando "yarn add multer".

*/

const multer = require('multer'); //Importação após instalação
const path = require('path'); //Dependencia que vem com o node.
const crypto = require('crypto'); //Permite a criptogrsfia dos arquivos upados.

module.exports = {
    //path.resolve evita problemas ao escolher caminhos em diferentes S.O
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'));
        },
        filename: (req, file, cb) => { // Permite criar um nome unico ao arquivo upado.
            
            crypto.randomBytes(16, (err, hash) => { //Gera 16 Bits de caracteres aleatorios.
               if (err) cb(err);
               
               //Aqui ele cria algo parecido com "1212hhg21gh21g-nomearquivo"
               file.key = `${hash.toString('hex')}-${file.originalname}`;

               cb(null, file.key);
            })
        }
    })
}