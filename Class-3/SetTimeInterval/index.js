const body=document.body;

setInterval(()=>{
const red=Math.floor(Math.random()*100);
const green=Math.floor(Math.random()*100);
const blue=Math.floor(Math.random()*100);
const rgb=`rgb(${red},${green},${blue})`;
body.style.background=rgb;
},1000)