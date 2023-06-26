const busket=['chips','ghi','rice','salt']

const myPromise=new Promise((resolve, reject)=>{
    if(busket.includes('salt')&& busket.includes('rice')&& busket.includes('ghi')){
        resolve("FriedRice")
    }else{
        reject("NotFriedRice")
    }
})

myPromise.then((data)=>{
    console.log("Lets take the food")
}).catch((err)=>{
    console.log(err.message)
});