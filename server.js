const e = require('express');
const express =  require('express');
const PORT = process.env.PORT || 3001;
const mysql = require('mysql2');
const app = express();
//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Connect to datatbase
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL Username,
        user: 'root',
        //Your MySQL Password
        password: 'Fight4er!1207',
        database: 'election'
    },
    console.log('Connected to the election database.')
);
// db.query(`SELECT * FROM candidates`, (err, rows) =>{
//     console.log(rows);
// });

//Get a single candidate
// db.query('SELECT * FROM candidates WHERE id = 1', (err, row) =>{
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

//Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, results) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(results);
// }); 

//create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//                 VALUES (?, ?, ?, ?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err); {
//         console.log(err);
//     }
//     console.log(result);
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});







app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});