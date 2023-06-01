// API do pockemon
const json = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(resposta => resposta.json())

json.then(dados=>{
  console.log(dados)
})

