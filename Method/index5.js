//Getter and setter functions

class person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
   get fullname(){
        return `${this.firstname} ${this.lastname} ${this.age}`;
    }
}
const person1=new person("SaraAli","Khan",23);
console.log(person1.fullname);

console.log(person1)