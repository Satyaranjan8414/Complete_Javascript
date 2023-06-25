const heading1=document.querySelector('.heading1');
const heading2=document.querySelector('.heading2');
const heading3=document.querySelector('.heading3');


setTimeout(function(){
heading1.textContent="heading-1"
heading1.style.color="yellow";
setTimeout(()=>{
    heading2.textContent="heading-2"
    heading2.style.color="red";
},1000);
},1000)

