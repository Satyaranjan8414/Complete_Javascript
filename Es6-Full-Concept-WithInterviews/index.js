// console.log("Es6 Series")
//Use of var and let instead


// for(var i=0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

//Default Parameters
// function Default(){
//     return 100;
// }

// function add(a,b=Default()){
//     return a+b;
// }
// console.log(add(10))

// function main(a,b=main()){
//     return a+b;
// }
// console.log(main());//Maximum call stack size exceeded

//tempklate Laterals

let quote="Either You Run the code or code will Run You"
let by="Satyaranjan -M"

let code=`${quote} ${by} `
console.log(code)