//https://www.devmedia.com.br/javascript-fetch/41206
//https://www.alura.com.br/artigos/react-hooks
//https://legacy.reactjs.org/docs/hooks-intro.html#motivation 
 
fetch('http://exemplo.com/usuario')
    .then(response => {
      // valida se a requisição falhou
      if (!response.ok) {
        return new Error('falhou a requisição') // cairá no catch da promise
      }
 
      // verificando pelo status
      if (response.status === 404) {
        return new Error('não encontrou qualquer resultado')
      }
 
      // retorna uma promise com os dados em JSON
      return response.json()
    })
 
------------------------
 
//codigo react js
async function carregaRepositorios () {
      const resposta = await fetch('https://api.github.com/users/julio-cesar96/repos');
      const repositorios = await response.json();
 
      setRepositorio(repositorios);
      console.log(repositorios)
 //codigo js puro 
  /*fetch('https://api.github.com/users/julio-cesar96/repos',  {
      method: 'GET'})
    .then(dados => dados.json())
    .then(console.log)*/
    }
 
    carregaRepositorios();
 
-------------------------------
 
fetch('http://outroservidor.com/usuario', { mode: 'no-cors' })
    .then(T => T.json())
    .then(usuario => {
      console.log(usuario.nome)
    })
 
 
-------------------------------------
fetch('/api/usuario', { method: 'GET' })
    .then(response => response.text())
    .then(texto => console.log(texto))
    .catch(err => console.log(err.message))
 
--------------------------------------
 
//codigo react js
async function carregaRepositorios () {
    
 //codigo js puro 
var api = await fetch('https://api.github.com/users/julio-cesar96/repos',  {
      method: 'GET'});
    //.then(dados => dados.json())
    //.then(console.log)
   const res = await api.json()
   console.log(res[3].url);
    };
 
    carregaRepositorios();
------------------------------

//codigo react js
async function carregaRepositorios () {
    
 //codigo js puro 
var api = await fetch('https://api.github.com/users/julio-cesar96/repos',  {
      method: 'GET'});
    //.then(dados => dados.json())
    //.then(console.log)
   const res = await api.json()
   console.log(res[3].url);
    };

    carregaRepositorios();
