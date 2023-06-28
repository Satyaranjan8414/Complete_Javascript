//Async Await

const url="https://jsonplaceholder.typicode.com/posts";

// fetch(url).then(reponse=>{
//     return reponse.json();
// }).then(data=>{
//     console.log(data)
// })

async function getpost() {
   const response= await fetch(url)
   const data= await response.json()
   return data;
}
getpost().then(mydata=>{
    console.log(mydata)
}).catch(err=>{
    alert("please check Your Internet connection")
})