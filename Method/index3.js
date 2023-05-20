//New Keywords :---


function CreateUser(firstname,lastname,email,age,address){
    // const user=Object.create(CreateUser.prototype);
    this.firstname=firstname;
    this.lastname=lastname;
    this.email=email;
    this.age=age;
    this.address=address;
   
}
CreateUser.prototype.about=function(){
    return `${this.firstname} is ${this.age} Year Old`
}
CreateUser.prototype.is18=function(){
    return this.age>=18
}

CreateUser.prototype.sing=function(){
    return 'Rab ne bana di jodi'
}

const user1= new CreateUser("Satya","Maity","Satya@maity@gmail.com",19,"Bengalore")

console.log(user1)
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());