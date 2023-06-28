const url="https://jsonplaceholder.typicode.com/posts";

fetch(url).then(response=>{
    return response.json();
}).then(originaldata=>{
    console.log(originaldata)
}).catch(error=>{
    console.log("Error: " + error)
})