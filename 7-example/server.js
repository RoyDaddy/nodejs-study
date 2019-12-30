var express = require('express');
var mysql = require('mysql');
var app = express();

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'dh',
    password: '1234',
    database: 'node-study'
});

app.get('/', function (req, res) {
    // dbConnection.query("select * from users", function (err, rows, fields) {
    //     console.log(err)
    //     res.send(rows);
    // });
    // res.send('Hello World!');
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/test', function (req, res) {
    var id=req.params.id;
    dbConnection.query(`
        select *
        from users
        `, [id], function (err, rows, fields) {
        res.json(rows);
    });
});

app.get('/test/:id', function (req, res) {
    var id=req.params.id;
    dbConnection.query(`
        select *
        from users
        where num = ?
        `, [id], function (err, rows, fields) {
        res.json(rows);
    });
});

var server = app.listen(8000, function () {
    console.log('load Success!');
});