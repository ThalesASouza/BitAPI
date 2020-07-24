import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  try {
    await mongoose.connect( process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado");
  } catch (err) {
    console.log("Error" + err);
  }
})();


const bitixSchema = mongoose.Schema({
    oper_propnum: {
    type: String,
    require: true,
  },
  oper_protocolo: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  contratante_nome: {
    type: String,
    require: true,
  },
  contratante_cpf: {
    type: String,
    require: true,
  },
  datacriacao: {
    type: Date,
    require: true,
  },
  date_vigencia: {
    type: Date,
    require: true,
  },
  beneficiarios: {
    type: String,
    require: true,
  },
  vendedor_cpf: {
    type: String,
    require: true,
  },
  corretora_cnpj: {
    type: String,
    require: true,
  }
});

const bitixModel = mongoose.model("proposta", bitixSchema, "proposta");

export {bitixModel};
