var mySQL = require('mysql');

var connection = mySQL.createConnection(process.env.JAWSDB_URL);

// if (process.env.JAWSDB_URL) {
console.log('using jawsdb');
//     connection = mySQL.createConnection(process.env.JAWSDB_URL);

// } else {
//   console.log('using localhost');
//     connection = mySQL.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'user_data',
//     });
// }

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
