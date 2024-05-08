const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const lista = ['Java', 'Kotlin', 'Android']
// idicies       0        1         2

//Endpoint Read all [GET] /personagem
app.get('/personagem', function(req, res){
  res.send(lista)
})

//Endpoint Read By ID [GET] /personagem/:id
app.get('/personagem/:id', function(req, res){
  // Acessamos o parametro de Rota ID
  const id = req.params.id

  // Acessa o item na lista usando o ID - 1
  const item = lista[id - 1]

  // Enviamos o item como resposta
  res.send(item)
})

//Sinaliza para o Express que estamos usando JSON no Body
app.use(express.json())

// Endpoint Create [POST] /personagem
app.post('/personagem', function(req, res){
  // Acessamos o body da Requisição
  const body = req.body

  // Aceitamos a Propriedade 'nome' no body
  const novoitem = body.nome

  // Adicionamos na lista
  lista.push(novoitem)

  // Exibimos a mensagem com sucesso
  res.send('Item Adicionado com sucesso: ' + novoitem)
})

app.listen(5000, function(){
  console.log('Aplicação rodando em http://localhost:3000')
})