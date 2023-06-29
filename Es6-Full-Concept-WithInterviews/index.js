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

// let quote="Either You Run the code or code will Run You"
// let by="Satyaranjan -M"

// let code=`${quote} ${by} `
// console.log(code)


//Find and findindex function
// let arr=[
//     {id:10},
//     {id:20},
//     {id:46},
//     {id:100},
// ]

// let res=arr.findIndex((item)=>{
//     return item.id
// })
// console.log(res)

// class Fruits{
//     name="Orange"
//     constructor(){
//         console.log(this.name)
//     }
// }
// let getFruits= new Fruits()
// // console.log(getFruits)


// Inheritance

class color{
    black(){
        return "The color is black"
    }
    legs(){
        console.log("4 legs are there")
    }
}

class animal{
    
    constructor(){
       
            console.log("constructor")
        }
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
}

let animalcall= new animal()
let call= new color()

// animalcall.legs()
animalcall.eat()
animalcall.sleep()
call.legs()

