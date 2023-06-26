//By using Promise
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


function Color(ele, text, Color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ele) {
              ele.style.backgroundColor = Color;
              ele.textContent = text;
              resolve()
            } else {
                reject()

            }
          }, time);
    })
   
  }

const newPromise=Color(heading1,"Hello","red",1000)

newPromise.then(()=>{
return Color(heading2,"Hello","green",1000)
}).then(()=>{
    return Color(heading3,"Hello","blue",1000)
}).then(()=>{
    return Color(heading4,"Hello","yellow",1000)
}).then(()=>{
    return Color(heading5,"Hello","purple",1000)
}).then(()=>{
    return Color(heading6,"Hello","pink",1000)
}).then(()=>{
    return Color(heading7,"Hello","brown",1000)
})
