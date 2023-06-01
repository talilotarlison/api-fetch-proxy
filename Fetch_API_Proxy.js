//Documentação Fetch API Proxy:
//https://github.com/Rob--W/cors-anywhere/issues/301

const carregarfilme = async()=>{
    var myUrl = 'https://pastebin.com/raw/ycwqYKZJ';
    var proxy = 'https://cors-anywhere.herokuapp.com/';
const res = await fetch(proxy+myUrl,{

method:"GET"
});
const data = await res.json();
  
console.log(data[1].name);
}

carregarfilme();

