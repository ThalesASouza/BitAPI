import express from 'express';
import {bitixModel } from '../model/modelBitix.js';

const rota = express.Router();

rota.get('/periodoBitix', async (req,res)=>{
    const {inicial,final} = req.query;
    const periodoInicial = new Date(inicial);
    const periodoFinal = new Date(final);
    
    try{
        const consulta = await bitixModel.find(
            {$and:[{datacriacao:{$gte:periodoInicial}},{datacriacao:{$lte:periodoFinal}}]}
        )
        if (!consulta) {
            res.status(400).send("Periodo não encontrado");
        }
        res.send(consulta);
    }catch(err){
        res.status(500).send(err);
    }
})

export default rota;

