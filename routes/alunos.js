const express = require('express'); 
const router = express.Router(); 
const aluno = require('../models/aluno');

const mysql = require('../mysql').pool;



router.get('/', (req, res, next) => {

   res.status(200).send({
      
     mensagem: 'Usando Get 200 alunos'
 });

});

router.post('/', (req, res, next) => {

     res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de alunos'
     });
}); 



router.get('/:id_aluno', (req,res, next) => {
     const id = req.params.id

      if (id =>0){
      res.status(200).send({
      mensagem: 'Usando o Get de um alunos',
      id: id
});
} else {
      res.status(200).send({
        mensagem:'Id passado'
     });
}
});

router.patch ('/', (req, res, next) => {

     res.status(201).send({
        mensagem:'usando PACTH dentro da aluno'
     });
});


router.delete ('/', (req, res, next) => {

     res.status(201).send({
        mensagem:'usando DELETE dentro da aluno'
     });
});


module.exports = router;
