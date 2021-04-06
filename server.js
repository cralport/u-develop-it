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
db.query(`SELECT * FROM candidates`, (err, rows) =>{
    console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});







app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});