const db = require('../models');
const Escola = db.escola;


exports.create = (req,res) => {

   if(!req.body.aluno) {
   
    res.status(400).send({
        mensagem: "Content can not be empty"
    });
    return; 

   }

   const aluno = {
    nome: req.body.nome,
    datanascimento: req.body.datanascimento,
    cpf = req.body.cpf
}; 

   aluno.create(aluno)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Erro ao salvar os dados do aluno."
     });
   });
};

   
   const turma = {
    nometurma = req.body.nometurma,
    serie = req.body.serie     

   };

   turma.create(turma)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Erro ao salvar os dados do aluno."
     });
   });



   const matricula = {
  
    ano = req.body.ano,
    status = req.body.status

   };


   matricula.create(matricula)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Erro ao salvar os dados do aluno."
     });
   });


   const frequencia = {
   
    data = req.body.data,
    status = req.body.status

   };
   
   frequencia.create(frequencia)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Erro ao salvar os dados do aluno."
     });
   });

 




