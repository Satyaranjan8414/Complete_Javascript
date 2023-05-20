//New Keywords :---


function CreateUser(firstname,lastname,email,age,address,sing){
    // const user=Object.create(CreateUser.prototype);
    this.firstname=firstname;
    this.lastname=lastname;
    this.email=email;
    this.age=age;
    this.address=address;
    this.sing=sing;
   
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

const user2= new CreateUser("Sonalika","Das","Sonalika6666@gmail.com",22,"Balasore","Love aj kal")

// console.log(user1)
// console.log(user2)
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());

// console.log(user2.about());
// console.log(user2.is18());
// console.log(user2.sing);

for(key in user2){
    if(user2.hasOwnProperty(key)){
        console.log(key)
       
    }else{
         console.log("........................")
        console.log(key)
    }
}