//Returning promise from function

function promiseTo(){
    const busket=['chips','ghi','rice','salt']
    return new Promise((resolve, reject)=>{
        if(busket.includes('salt')&& busket.includes('rice')&& busket.includes('ghi')){
            resolve("FriedRice")
        }else{
            reject("NotFriedRice")
        }
    })
}

promiseTo().then((data)=>{
    console.log("Lets take the food")
}).catch((err)=>{
    console.log(err.message)
});