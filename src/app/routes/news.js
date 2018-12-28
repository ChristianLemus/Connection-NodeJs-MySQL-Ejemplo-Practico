var dbConnection = require("../../config/dbConnection");

module.exports = app => {

  var connection = dbConnection();

  app.get('/', (req, res) => {
    connection.query('SELECT * FROM news', (err, result) => {
      //console.log(result);
      res.render('news/news', {
        news: result
      });
    });
  });

  //para insertar
  app.post('/news', (req, res) => {
    //console.log(req.body);
    const { title, news} = req.body;
    connection.query('INSERT INTO news SET?', {
      title,
      news
    }, (err, result) =>{
      res.redirect('/');
    });
  });
};
