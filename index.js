import express from 'express'
import cors from 'cors'
import rota from './rotas/rota.js'
import dotenv from 'dotenv'; 


const app =  express();

app.use(express.json());
app.use('/bitix', rota);

app.listen(process.env.PORT || 8081, ()=>{
    try {
        console.log("Api started");
      } catch (err) {
        console.log("Error" + err);
      }
})
