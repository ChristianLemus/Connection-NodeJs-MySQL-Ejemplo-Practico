var mysql = require('mysql');

module.exports = () =>{

    return mysql.createConnection({

        host: 'localhost',
        user: 'DamnWizard',
        password: 'Chris032320002303302330',
        database: 'news_portal'
    });
}