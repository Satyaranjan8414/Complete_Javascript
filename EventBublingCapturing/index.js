//Event bubbling: click event on document element and click event on document body

const grandparent=document.querySelector(".grantparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");

child.addEventListener("click",function(){
    console.log("You clicked on child");
})

grandparent.addEventListener("click",function(){
    console.log("You clicked on grandparent");
})

parent.addEventListener("click",function(){
    console.log("You clicked on parent");
})


// Event capturing 