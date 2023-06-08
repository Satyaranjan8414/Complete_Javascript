const mainButton = document.querySelector("button");
const body=document.body
const currentColor = document.querySelector(".Current-Color");
// console.log(currentColor)

function randomColorGenerator(){
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    const randomcolor= `rgb(${r},${g},${b})`
    return randomcolor;
}
mainButton.addEventListener("click",function(){
    const randomcolor=randomColorGenerator()
    body.style.backgroundColor=randomcolor;
    currentColor.textContent=randomcolor;
})
