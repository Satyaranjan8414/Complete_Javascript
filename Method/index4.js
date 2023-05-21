//By Using Class mERTHOD

// class CreateUser{
//     constructor(firstname,lastname,email,age,address,sing){
//         // console.log("Constructor is calling")
//         this.firstname=firstname;
//         this.lastname=lastname;
//         this.email=email;
//         this.age=age;
//         this.address=address;
//         this.sing=sing;  
//     }
//     about(){
//         return `${this.firstname} is ${this.age} Year Old`
//     }
//     is18(){
//         return this.age>=18
//     }
//     sing(){
//         return 'Rab ne bana di jodi'
//     }
// }

// const user2= new CreateUser("Sonalika","Das","Sonalika6666@gmail.com",22,"Balasore","Love aj kal")

// console.log(user2)

// console.log(Object.getPrototypeOf(user2))



class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return `${this.name} is Eating`
    }
    old(){
        return `${this.name} is ${this.age} years old`
    }
}

class dog extends Animal{
    constructor(name,age,spped){
        super(name,age);
        this.spped=spped;
    }
    spped(){
        return `The dog speed is ${this.spped}`
    }
}

// const animal1=new Animal("Cow",10)
// const animal2=new Animal("Befello",20)
// console.log(animal1)
// console.log(animal2)

// console.log(animal1.eat());
// console.log(animal1.old());

const dong=new dog("Lovely","1",20)
console.log(dong);


