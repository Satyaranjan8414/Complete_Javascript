//Fetch Request

const url="https://jsonplaceholder.typicode.com/posts";

fetch(url).then(response=>{
    return response.json();
}).then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err);
});