// function fun(callback){
//     console.log("Hi bro")
//     callback()
// }
// fun(()=>{
//     console.log("hello") 
// })

// function getNumber(a,b,callback){
//     console.log(a,b)
//     callback(a,b)
// }

// // function add(c,d){
// //     console.log(c+d)
// // }

// getNumber(1,2,(c,d)=>{
//     console.log(c+d)
// })


// function getNumber(num1,num2,onSuccess,onFail){
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         onSuccess(num1,num2)
//     }else {
//         onFail()
//     }

// }

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
// function onFailure(){
//     console.log("Please pass a number")
// }

// getNumber(100,2,addTwoNumbers,onFailure)


function getNumberAndAddTwoNumbers(num1,num2,onSuccess,onFailure){
    if(typeof num1 ==="number" && typeof num2 ==="number"){
        onSuccess(num1,num2)
    }else{
        onFailure()
    }
}

function addTwoNumbers(num1,num2){
    console.log(num1+num2)
}

function onFailure(){
    console.log("Please pass a number")
    console.log("Type a Number value")
}

getNumberAndAddTwoNumbers(100,2,addTwoNumbers,onFailure)