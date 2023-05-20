//By Using Class mERTHOD

class CreateUser{
    constructor(firstname,lastname,email,age,address,sing){
        // console.log("Constructor is calling")
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.age=age;
        this.address=address;
        this.sing=sing;  
    }
    about(){
        return `${this.firstname} is ${this.age} Year Old`
    }
    is18(){
        return this.age>=18
    }
    sing(){
        return 'Rab ne bana di jodi'
    }
}

const user2= new CreateUser("Sonalika","Das","Sonalika6666@gmail.com",22,"Balasore","Love aj kal")

console.log(user2)