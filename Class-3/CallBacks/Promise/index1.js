//Returning promise from function

// function promiseTo(){
//     const busket=['chips','ghi','rice','salt']
//     return new Promise((resolve, reject)=>{
//         if(busket.includes('salt')&& busket.includes('rice')&& busket.includes('ghi')){
//             resolve("FriedRice")
//         }else{
//             reject("NotFriedRice")
//         }
//     })
// }

// promiseTo().then((data)=>{
//     console.log("Lets take the food")
// }).catch((err)=>{
//     console.log(err.message)
// });


// Promise with setTimeout

function myPromise(){
    return new Promise((resolve, reject)=>{
        const value=true;
            setTimeout(()=>{
                if(value){
                    resolve()
                }else{
                    reject()
                }
            },2000)
        })
}

myPromise().then(()=>{console.log("Resolve")}).catch(()=>{console.log("Reject")});



function mypromiseToYou(){
    return new Promise ((resolve, reject)=>{
        const value=false;
        setTimeout(()=>{
            if(value){
                resolve()
                console.log("i am waiting for you")
            }else{
                reject()
            }
        },100)
    })
}

mypromiseToYou().then(()=>{console.log("let's Go !")}).catch(()=>{console.log("You wasted my time")});