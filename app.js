

var express = require('express');
var app = express();
var bodyParser= require('body-parser');
const mysql = require('mysql');
const hbs = require('express-handlebars');

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

app.engine('.hbs',hbs({
    defaultLayout:'default',
    extname:'.hbs'    
}));

app.set('view engine','.hbs');

/******************create connection*****************/
const db = mysql.createConnection({
    host     :'localhost',
    user     :'root',
    password :'',
    database :'clasedb' // comment this line when creating the database for the first time
});

db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('MySql Connected');
});

app.get('/createdb',(req,res) => {
    let sql = 'CREATE DATABASE clasedb';
    db.query(sql, (err, result) =>{
        if(err) throw err;
            console.log(result);
            res.send('Database created....');
    })
});



var person = require('./person/person');
person(app,db);

var models = require('./person/models');
models(app,db);


app.listen(8080);

