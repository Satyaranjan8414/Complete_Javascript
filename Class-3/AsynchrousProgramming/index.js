//Asynchronously executes and synchronizes programming

//Synchronization Programming
// console.log("Script execution")
// for(let i = 0; i<=100;i++){
//     console.log(i)
// }

// console.log("Execution complete")


//Example of SetTimeout with Asynchonous Proramming

console.log("Script Start")
setTimeout(()=>{
    console.log("Inside setTimeout")
},0)

for(let i =0;i<4;i++){
    console.log("Execution complete")
}

console.log("Script End")





