var app = require('./config/server');

require('./app/routes/news')(app);

// iniciar el servidor

app.listen(app.get('port'), () => {

    console.log('El servidor se encuentra en el puerto: ', app.get('port'));
});