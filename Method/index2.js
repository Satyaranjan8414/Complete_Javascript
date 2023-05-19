function createUser(name,age){
    this.name=name;
    this.age=age;
}

createUser.prototype.about=function(){
console.log(this.name,this.age);
}
const user1= new createUser("Satya",18)

user1.about();