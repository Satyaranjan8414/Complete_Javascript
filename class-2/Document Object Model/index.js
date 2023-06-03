//Document Object Model....

// select a document from the document collection ids

// const worktime=document.getElementById("works-time")
// const link=document.querySelector("a")
// console.log(link.getAttribute("href").slice(1))
// link.style.backgroundColor="red"

// const user=document.getElementById("username")
// const divele=document.querySelector("div")
// divele.style.backgroundColor="green"

//Get and set Attributes

// const link=document.querySelector("a")
// console.log(link.getAttribute("href").slice(1))

//Type Attributes

const input=document.querySelector(".todo-form input")
console.log(input.getAttribute("type"))
input.setAttribute("type", "number")
console.log(input.getAttribute("type"))
