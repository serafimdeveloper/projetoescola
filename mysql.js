const Sequelize = require  ('sequelize'); 

const sequelize = new Sequelize('dbescola', 'escola','tecalpha',{

   host:'localhost', 
   dialect:'mysql'
});


sequelize
  .authenticate()
  .then((response) => {
    console.log(response);
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;