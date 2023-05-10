// Iterable 7:52

// let name="Satyaranjan Maity"
// for(let i =0;i<name.length;i++){
//     console.log(name[i])
// }

//Set Iterable

// const numbers=new Set([2,3]);
// numbers.add(6)
// if(numbers.has(1)){
//     console.log("1 is Present")
// }else{
//     console.log("No")
// }
// console.log(numbers)


//fIND THE Unique Elemrnt in the gIVEN aARRAY

// const myarr=[1,2,3,4,4,5,6,6]

// const unique=new Set(myarr)

// console.log(unique)


// Map Object
const person=new Map();

person.set('Name','satya')
person.set('age','10')

console.log(person.get('Name'))
console.log(person.get('age'))
// console.log(person.keys())

for(let key of person.keys()){
    console.log(key,typeof key)
}