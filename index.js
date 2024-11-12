import express from "express";      // Requisição do pacote do express

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  console.log("Rota GET/ solicitada");
  res.json({
    nome: "Arthur Não precisou fazer ENEM PRA SER ALGUÉM!!!",      // Substitua pelo seu nome
  });
});

app.get("/enem", (req, res) => {        // Cria a rota da raiz do projeto
  console.log("Rota GET/enem solicitada");
  res.json({
    nome: "VOCÊS TB NÃO PRECISAM DE ENEM PRA SER NINGUÉM!!!",      // Substitua pelo seu nome
  });
});


app.get("/enem/2025", (req, res) => {        // Cria a rota da raiz do projeto
  console.log("Rota GET/enem solicitada");
  res.json({
    nome: "ESPERO QUE NÃO VEJA NINGUÉM AQUI... SÓ OS QUE JOGAM BEACH TENNIS... !",      // Substitua pelo seu nome
  });
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});