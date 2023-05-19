const userMethods= {
    about:
is18:function(){
    return this.age>=18
},
sing:function(){
    return 'Rab ne bana di jodi'
}
}





function CreateUser(firstname,lastname,email,age,address){
    const user=Object.create(userMethods);
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    // user.about=userMethods.about;
    // user.is18=userMethods.is18;
    // user.sing=userMethods.sing
    return user;
   
}
CreateUser.prototype.about=function(){
    return `${this.firstname} is ${this.age} Year Old`
}

const user1=CreateUser("Satya","Maity","Satya@maity@gmail.com",19,"Bengalore")
// const user2=crea
// const about=user1.about()
// const is18=user1.is18()

console.log(user1)
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());