import express from "express";
import cors from 'cors'
import { bitixModel } from "../model/modelBitix.js";

const rota = express.Router();

rota.get("/periodoBitix", cors(), async (req, res) => {
  const { inicial, final } = req.query;
  const periodoInicial = new Date(inicial);
  const periodoFinal = new Date(final);

  try {
    const consulta = await bitixModel.find({
      $and: [
        { datacriacao: { $gte: periodoInicial } },
        { datacriacao: { $lte: periodoFinal } },
      ],
    });
    if (consulta.length === 0) {
      res.status(400).send({ err: "Periodo não encontrado" });
    }
    res.send(consulta);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default rota;
