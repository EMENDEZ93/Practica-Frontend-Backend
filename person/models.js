var models = function (app,db){
    
    
    /* Crear tota las tablas */
        app.get('/createTables',(req,res)=>{
    
                let sql = 'CREATE TABLE persona( Id int NOT NULL AUTO_INCREMENT, nombre VARCHAR(50), cedula int, fechaNacimiento DATETIME, PRIMARY KEY (Id) )';
                db.query(sql,(err,result)=>{
                    if(err)throw err;
                    console.log(result);
                    res.send('persona table created');
                });

         });
    
    };
    
    module.exports = models;