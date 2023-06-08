// const rootnode=document.getRootNode();
// // console.log(rootnode);
// const htmlnode= rootnode.childNodes[0]
//console.log(htmlnode.childNodes)//NodeList(3) [head, text, body]

// const headnode=htmlnode.childNodes[0]
// console.log(headnode.cloneNode)

// const testnode=htmlnode.childNodes[1]
// console.log(testnode)

// const bodynode=htmlnode.childNodes[2]
// console.log(bodynode)

// const h1=document.querySelector("h1")
// const h1parent= h1.parentNode

// h1.style.backgroundColor= "green"

// const con=document.querySelector(".container")
// console.log(con.children)


// const one=document.querySelector(".one")
// one.addEventListener("click", function(){
//     console.log("You clicked on one")
// })

// const two=document.querySelector(".two")
// two.addEventListener("click", function(){
//     console.log("You clicked on two")
// })

// const three=document.querySelector(".three")
// three.addEventListener("click", function(){
//     console.log("You clicked on three")
// })

// const buttonall = document.querySelectorAll("button")

//For Of loops

// for (let button of buttonall) {
//     button.addEventListener("click", function () {
//         console.log(this.innerHTML)
//     })
// }

//For loops

// for(let i=0;i<buttonall.length;i++){
//  buttonall[i].addEventListener("click",()=>{
//     console.log(this.textContent)
//  })
// }

//Foreach loop

// buttonall.forEach(function(button){
//     button.addEventListener("click",function(){
//             console.log(this.textContent)
//         })
// })

//Event Objects

//6:40

// const buttonall=document.querySelectorAll("button")

// for (let button of buttonall) {
//     button.addEventListener("click", (e) =>{
//         console.log(e.currentTarget)
//     })
// }

// console.log("Script started")

// const allbuttons = document.querySelectorAll("button")

// allbuttons.forEach(function(button){
 
    
//     button.addEventListener("click",(e)=>{
//         let num=0;
//         for(let i=0;i<=1000000000;i++){
//             num+=i;
//         }
//         console.log(e.currentTarget.textContent,num);
//     })
// })

// let outer=0;
// for(let i=0;i<=100000000;i++){
//     outer+=i;

// }
// console.log("Value of outer variable is",outer)

// console.log("Script finished")


// 6:51

const buttonall=document.querySelectorAll("button")

buttonall.forEach(function(button){
    button.addEventListener("click",(e)=>{
       e.target.style.backgroundColor="red"
       e.target.style.color="white"
    })
})
