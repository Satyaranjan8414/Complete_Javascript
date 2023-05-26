//Closures are used 

// function myfun(fname,lname){
//     function child(fname,lname){
//         console.log(fname,lname);
//     }
//     return child;

// }
// const result = myfun("Satya","Maity");

// console.log(result)

// function hello(x){
//     const a="Hello"
//     const b="World"
//     return function(){
//         console.log(a,b,x)
//     }
// }
// const result = hello("arg")
// result()


// ClosureEx-2

// const myfun=p=>n=>p**n
    

// const cube=myfun(5)
// const ans=cube(3)
// console.log(ans)

//Closure -3 Example

// function myfun(){
//     let count=0;

//     return function(){
//         if(count<1){
//             console.log("You are Calling Me")
//             count++;
//         }else{
//             console.log("I have Already Called")
//         }
//     }
// }

// const result = myfun()
// result()
// result()

// Example-4
function myfun(){
    let count=0
    return function(){
        if(count<1){
            console.log("Hi tumne Mujhe call kia")
            count++;
        }else{
            console.log("Me already Called ho chuka hu")
        }
    }
}
const res=myfun()
res();
res();