//Collection Of Items in order manner

//Array is mutuble we can change the value at anytime but Before excute the code


// let name=["Satya","Santosh","Govind"]
//  name[1]="Sonu"
// console.log(name)

// console.log(typeof(name))
// console.log(Array.isArray(name))


//Array Push POP

// let name=["Satya","Santosh","Govind"]

// // name.push("sai")
// // name.pop()
// // console.log(name)

// name.unshift("Rai")
// console.log(name)


// referance Type

// let arr1=["Satya","Sai"]
// let arr2=arr1;
// console.log(arr1)
// console.log(arr2)
// arr1.push("Goi")

// console.log(arr1)
// console.log(arr2)


// ForLoop in array

// let name=["Satya","Santosh","Govind"]

// for(let i=0;i<name.length;i++){
//     console.log(name[i].toUpperCase())
    
// }

// console.log("Thanking You ");

// const name="satya"
// name.push("ram")
// console.log(name)

//To push inside const 
// const name=["Satya","ram","Rahit"]
// name.push("Lulu")
// console.log(name)

//For OF loops i array

// const names=["Satya","ram","Rahit"]
// const newname=[];

// for(let all of names){
//     newname.push(all.toUpperCase("Rahul"))
    
// }
// console.log(newname)

const names=["Satya","ram","Rahit"]
 const newname=[];

for(let all in names){
    newname.push(names[all].toUpperCase())
    
}
console.log(newname)

