// console.log("Hello from script")
//Json-JavaScript Object Notation 

const url="https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest();

// console.log(xhr)

xhr.open("GET",url)
// xhr.onreadystatechange=function(){
//     // console.log(xhr.readyState)

//     if(xhr.readyState === 4){
//         const response = JSON.parse(xhr.response)
//         console.log(response)
//     }
// }

xhr.onload=function(){
    const response = JSON.parse(xhr.response)
        console.log(response)
}
xhr.send()



