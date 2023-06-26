
console.log("Script Started");

const busket=['chips','ghi','rice','salt']

const myPromise=new Promise((resolve, reject)=>{
    if(busket.includes('salt')&& busket.includes('rice')&& busket.includes('ghi')){
        resolve("FriedRice")
    }else{
        reject("NotFriedRice")
    }
})

for(let i=0;i<=100;i++){
    console.log(Math.random(),i)
}

setTimeout(()=>{
    console.log("I am from setTimeout")
},0)

myPromise.then((data)=>{
    console.log("Lets take the food")
}).catch((err)=>{
    console.log(err.message)
});

console.log("Script Completed")