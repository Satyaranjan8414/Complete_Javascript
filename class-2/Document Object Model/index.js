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

// const input=document.querySelector(".todo-form input")
// console.log(input.getAttribute("type"))
// input.setAttribute("type", "number")
// console.log(input.getAttribute("type"))

// const user = document.getElementsByClassName("user-group")

// console.log(typeof user)


// const data=document.getElementsByClassName("nav-item")
// for(let i=0;i<data.length;i++){
//     const dataitem=data[i];
//     // dataitem.style.backgroundColor="green"
//     dataitem.style.fontWeight="bold"
// }

// const todo=document.querySelector(".todo-form")
// todo.innerHTML="Inner Html is changed"
// todo.innerHTML="<button>Inner</button>"
// console.log(todo.innerHTML)


// const newtodo=document.querySelector(".newTodo")
// newtodo.innerHTML=newtodo.innerHTML+"<li>New todo added </li>"

// const newItem=document.createElement("li")

// newItem.innerHTML="We can now add"

// const newtodo=document.querySelector(".newTodo")

// newtodo.append(newItem)

// const todo=document.querySelector(".newTodo")
// todo.innerHTML=todo.innerHTML+ "<li>New todo added</li>";

// const ul=document.querySelector(".newTodo")
// const li=document.createElement("li");
// const refnode=document.querySelector(".link")
// li.textContent="New todo added successfully"
// ul.insertBefore(li,refnode)


// const signups=document.querySelector("#signup")
// const info=signups.getBoundingClientRect();
// console.log(info)

//EVENT 

// const btn=document.querySelector(".btn")
// btn.addEventListener("click",function(){
//     console.log("Clicked")
// })

//By using arrow functions

// btn.addEventListener("click",()=>{
//     console.log("Clicked Learnd More button")
//     console.log("This Value When it is clicked")
//     console.log(this);
// })

const body=document.body
body.addEventListener("keypress",function(e){
    console.log(e.key)
})



