const body=document.body;
const button=document.querySelector('button');

const IntervalID=setInterval(()=>{
const red=Math.floor(Math.random()*100);
const green=Math.floor(Math.random()*100);
const blue=Math.floor(Math.random()*100);
const rgb=`rgb(${red},${green},${blue})`;
body.style.background=rgb;
},1000)


button.addEventListener('click',()=>{
    clearInterval(IntervalID)
    button.textContent=body.style.background;
})
