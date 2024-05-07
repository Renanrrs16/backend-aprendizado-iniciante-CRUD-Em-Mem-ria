const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

//Endpoint /oi -> olá Mundo
app.get('/oi', function (req, res){
  res.send('Olá MUndo!!!!!!')
})

app.listen(3000, function(){
  console.log('Aplicação rodando em http://localhost:3000')
})