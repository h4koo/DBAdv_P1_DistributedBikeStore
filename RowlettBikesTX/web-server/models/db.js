const mysql = require("mysql");
const dbConfig = require("./../config/db.config.js");

// Create a connection to the database
const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    connectionLimit: 10
});

// // open the MySQL connection
// connection.connect(error => {
//     if (error) throw error;
//     console.log("Successfully connected to the database.");
// });

// let res = connection.query("select * from ventas.ordenes limit 10;", (err, res) => {
//     if (err) {
//         console.log("error: ", err);
//         return;
//     }
//     console.log(res);
// });

module.exports = connection;