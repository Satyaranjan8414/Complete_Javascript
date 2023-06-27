// console.log("Hello from script")
//Json-JavaScript Object Notation 

 const url="https://jsonplaceholder.typicode.com/posts"

// const xhr = new XMLHttpRequest();

// console.log(xhr)

// xhr.open("GET",url)
// xhr.onreadystatechange=function(){
//     // console.log(xhr.readyState)

//     if(xhr.readyState === 4){
//         const response = JSON.parse(xhr.response)
//         console.log(response)
//     }
// }

// xhr.onload=function(){
//     const response = JSON.parse(xhr.response)
//         console.log(response)
// }
// xhr.send()


const xhr = new XMLHttpRequest();

xhr.open("GET",url)
xhr.onload=()=>{

if(xhr.status >= 200 && xhr.status<300){
    const response = JSON.parse(xhr.response)
    console.log(response)
}else{
    alert("Plaese check the URL")
}
    
}
xhr.onerror=()=>{
    console.log("please check the Network connection")
}
xhr.send()



