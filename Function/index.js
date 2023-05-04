//Function is nothing but repeatation same code again and again without Rewrite the code

// function happyBirthday(){
//     console.log("Happy Birthday To You Happy BirthDay To Gn....du......")
// }

// happyBirthday()

// happyBirthday()

// happyBirthday()

// happyBirthday()
// happyBirthday()
// happyBirthday()
// happyBirthday()
// happyBirthday()
// happyBirthday()
// happyBirthday()


// function Addition(a,b){
//     console.log(a+b)
// }

// Addition(2,3)
// Addition(2,9)

//Code For Even and Odd value Checkers
// function iseven(a){
//     if(a%2==0){
//         console.log("True")
//     }else{
//         console.log("False")
//     }
// }
// iseven(3)

//fIND THE target value

// const findThevalue=function(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return i;
//         }
           
        
//     }
//     return -1;
// }
// let arr=[1,2,3,4,6,5]
// // let target=4;
// let newvalue=findThevalue(arr,4)
// console.log(newvalue)

// arrow Function 

// const findThevalue=(arr,target)=>{
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return i;
//         }
           
        
//     }
//     return -1;
// }
// let arr=[1,2,3,4,6,5]
// // let target=4;
// let newvalue=findThevalue(arr,4)
// console.log(newvalue)



// const raj=()=>{
//     console.log("Hi")
// }
// raj()

//Hoisting :iF we want to call before intialization anything then its called
// hoisting so make sure You are calling any function after Intialization  

// Ex
// console.log(name)
// const name="satya"

// console.log(name)


//Function Inside another Function 

// const app=()=>{
//     const add=(a,b)=>{
//         console.log(a+b)
//     }
//     const name=()=>{
//         console.log("Hello My Name is Satyaranjan Maity")
//     }
//     const baby=()=>{
//         console.log("Baby Ko bass Pashand Hai.....")
//     }
//     console.log("Hi From APP")
//     add(2,4)
//     name()
//     baby()
// }
// app()

// LEXICAL SCOPE


// Example with code
const name="Love You Javascript" //Global Scope
function myapp(){
    // const name="Love You Javascript" //LEXICAL SCOPE
    console.log("Hi From Myappp")
    const myfun=()=>{
        // const name="Love You Javascript" //LEXICAL SCOPE 
        const myfun2=()=>{
            
        // const name="Love You Javascript" //LEXICAL SCOPE  
        console.log("Hi From my fun " ,name)
        }
      myfun2()
    }
    myfun()
}
myapp()


