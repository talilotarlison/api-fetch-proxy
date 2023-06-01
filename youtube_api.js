async function busca(){
const url = "https://www.googleapis.com/youtube/v3/alura";
const resultado =  await fetch(url,{ 
  method: "GET"
});
const data = await resultado.json()
console.log(data)
}
//.then((response) => response.json());
//.then((data) => console.log(data)); 
busca();
