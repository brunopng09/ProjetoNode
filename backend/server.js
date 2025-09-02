// Importando os modulos das dependencias
const express = require("express");
const cors = require("cors");


// CRIANDO A IINSTANCIA DA APLICAÇÃO EXPRESS
const app = express();

// DEFININDO A PORTA DE APLICAÇÃO
const port = 5001;

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
