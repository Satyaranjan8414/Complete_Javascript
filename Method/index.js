//Method

//Function inside Object

const person={
    firstname:"Ram",
    age:23,
    gender:"male",
    about: function(){
        console.log(`name is ${this.firstname} and age is ${this.age} and gender is ${this.gender}`)
    }
}
person.about()


//Call APPLY Bind

// const user1={
//     fistName:"Satya",
//     about:function(hobby,song){
//         console.log(this.fistName,hobby,song)
//     }
// }
// const user2={
//     fistName:"Raj",
//     about:function(hobby,song){
//         console.log(this.fistName,hobby,song)
//     }
// }
//Call Function
// user1.about.call(user2,"Spots","Rab ne banadi jodi")

// //Apply Function 
// user1.about.apply(user2,["Spots","Rab ne banadi jodi"])


//Bind Function -It always Return a function 

// const func=user1.about.bind(user2,"Love","Love2")
// func()


// const user1={
//     fistName:"Satya",
//     age:17,
//     about(){
//         console.log(this.fistName,this.age)
//     }
// }

// user1.about()


//Object Oriented Programming-OOPS

const userMethods= {
    about:function(){
    return `${this.firstname} is ${this.age} Year Old`
},
is18:function(){
    return this.age>=18
}
}





function CreateUser(firstname,lastname,email,age,address){
    const user={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=userMethods.about;
    user.is18=userMethods.is18;
    return user;
   
}

const user1=CreateUser("Satya","Maity","Satya@maity@gmail.com",19,"Bengalore")
// const user2=crea
// const about=user1.about()
// const is18=user1.is18()

console.log(user1)
console.log(user1.about());
console.log(user1.is18());



// let arr=[1,2,3,4,5,6,3,4,6]
// let obj={}

// for(let i=0;i<arr.length;i++){
//     obj[arr[i]]="unique"
// }
// console.log(obj)






