//Introducing Promise
// Promises are a way to handle asynchronous tasks.
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function Color(ele,text,Color,time,onsuccess,onfail) {

    setTimeout(()=>{
        if(ele){
            ele.style.backgroundColor=Color;
            ele.textContent=text;
            if(onsuccess){
                onsuccess();
            }
           
        }else{
           if(onfail){
           
                onfail();
           }
        }
        
    },time)
}

Color(heading1,"Hello","red",1000,()=>{
    Color(heading2,"Yes!","pink",2000,()=>{
        Color(heading3,"How are You?","green",1000,()=>{
            Color(heading4,"I am Good !What about You?","blue",2000,()=>{
                Color(heading5,"I am also Fine! where are You Going?","purple",2000,()=>{
                    Color(heading6,"I am Going to Market!","yellow",1000,()=>{
                        Color(heading7,"Can i Join with You! Yes sure","orange",1000,()=>{
                            console.log("All is done")
                        })
                    },()=>{
                        console.log("Missing element")
                    })
                },()=>{
                    console.log("Heading-5 is missing")
                })
            },()=>{
                console.log("Missing element")
            })
        },()=>{
            console.log("Missing element")
        })
    },()=>{
        console.log("Missing element")
    }) 
},()=>{
    console.log("Missing element")
})
