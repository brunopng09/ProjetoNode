// Importando os modulos das dependencias
const express = require("express");
const cors = require("cors");


// CRIANDO A INSTANCIA DA APLICAÇÃO EXPRESS
const app = express();

// DEFININDO A PORTA DE APLICAÇÃO
const port = 5001;

// CONFIGURAR O EXPRESS PARA REQUISIÇÕES EM JSON
app.use(express.json());

// HABILITA O COR PRA ACEITAR REQUISICOES
app.use(cors());

// TABELA DE PREÇOS
const precos ={
    bicicleta: 5.00,
    carro: 9.50,
    drone: 12.00
}

// CRIANDO A ROTA DA APLICAÇÃO
app.post("/calcularfrete",(req,res)=>{
    // desustruturação para extrair as variaveis da aplicação
    const{distancia,tipoTransporte}= req.body;

    if(distancia === undefined || tipoTransporte === undefined){
        return res.status(400).json({error:"distancia e transporte obrigatorios"})
    }

    const precoPorKM = precos[tipoTransporte.toLowerCase()];
    if(precoPorKM === undefined){
        return res.status(400).json({error:"tipo de transporte invalido"})
    }

    // calcular o valor total do frete
    const valorTotal = distancia * precoPorKM
    res.json({valorTotal: valorTotal.toFixed(2)}) //ARREDONDA PARA 2 CASAS DECIMAIS
    
})


app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
