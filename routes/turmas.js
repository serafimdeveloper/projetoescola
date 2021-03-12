const express = require('express'); 
const router = express.Router(); 
const db = require('../models');


router.get('/', (req, res, next) => {
      res.status(200).send({

      mensagem: 'Usando Get dentro da rota de produtos'
     });

});

router.post('/', (req, res, next) => {

      res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de produtos'
      });
}); 

router.get('/:id_turma', (req,res, next) => {
     const id = req.params.id_aluno

     if (id ==0){
      res.status(200).send({
      mensagem: 'Usando o Get de um aluno',
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
        mensagem:'usando PACTH dentro da rota'
      });
});


router.delete ('/', (req, res, next) => {

      res.status(201).send({
        mensagem:'usando DELETE dentro da rota'
      });
});

module.exports = router;