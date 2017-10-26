var person = function (app,db){


    app.get('/clients',function(req,res){
            res.end('Edwin Mendez');
    });

    app.get('/client/:cc',function(req,res){
        db.query('select * from client where cc = ?',[req.params.cc], function(err,rows){
            res.end(JSON.stringify(rows));
        });
    });


    app.use("/", (req,res) => {
        
         db.query('insert into persona( nombre,cedula,fechaNacimiento ) values (?,?,?)',[req.body.nombre,req.body.cedula, req.body.fechaNacimiento], function(err,rows){});
         console.log(req.body.nombre, req.body.cedula, req.body.fechaNacimiento); 
         res.render('form');
     
     });


    app.post('/person',function(req,res){
        db.query('insert into persona( nombre , cedula, fechaNacimiento ) values (?,?,?)',[req.body.nombre,req.body.cedula, req.body.fecha], function(err,rows){
            res.end(JSON.stringify(rows));
        });
    });

};

module.exports = person;