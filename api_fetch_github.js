/*function main(){
  const user = "talilotarlison"
  const url = "https://api.github.com/users/"
  fetch(url+user) 
    .then(async (response)=>{
return await response.json()
    //console.log(res)
  }).then((user)=>{console.log(user.bio)})
}


async function main(){
    const user = "talilotarlison"
  const url = "https://api.github.com/users/"
  const promise = await fetch(url+user)
  const usuario = await promise.json()
  console.log(usuario)
}
*/

async function main(){
    const user1 = "talilotarlison"
    const user2 = "rprrafa"
  const url = "https://api.github.com/users/"
  const promise1 =  fetch(url+user1)
  const promise2 =  fetch(url+user2)
  const promises = await Promise.all([promise1 ,promise2]);
 const res1 =  await promises[1].json()
 const res2 =   await promises[0].json()
  
  console.log(res1.id)
  console.log(res2.id) 
}

main()
    



function main(){
  const user = "talilotarlison"
  const url = "https://api.github.com/users/"
  fetch(url+user)
    .then(async(response)=>{
    return await response.json()
  }).then((user)=>{console.log(user)})
}

main()
