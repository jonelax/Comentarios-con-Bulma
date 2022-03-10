const express=require('express');
const conectarBD=require('./config/db');
const cors=require('cors');


const res = require('express/lib/response');

const app=express(); //creamos el servidor

conectarBD();//Conectando a la base de datos

app.use(express.static('public'));

app.use(express.json());
app.use(cors());
app.use('/api/cometarios',require('./routes/comentario'));


app.listen(process.env.PORT,()=>{
    console.log('El servidor se ha iniciado puerto '+process.env.PORT);
})