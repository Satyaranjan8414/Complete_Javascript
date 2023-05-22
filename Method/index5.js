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
    // setname(firstname,lastname){
    //     this.firstname=firstname;
    //     this.lastname=lastname;
    // }

    set setname(fullname){
        const [firstname,lastname] = fullname.split(" ");
        this.firstname=firstname;
        this.lastname=lastname;

    }
}
const person1=new person("SaraAli","Khan",23);
console.log(person1.fullname);

//  person1.setname("Rahul","Reddy")
// console.log(person1.firstname);
// console.log(person1.lastname);



