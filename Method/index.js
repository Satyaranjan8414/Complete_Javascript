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