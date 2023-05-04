//Foreach
//Map
//Filters
// const arr=[4,5,8,9]

// function myfun(number,i){
//     console.log(`index is ${i} number is ${number}`)
// }


// for(let i=0;i<arr.length;i++){
//     myfun(arr[i],i)
// }
// arr.forEach(myfun)

// arr.forEach(function(number,i){
//     console.log(`index is ${i} number is ${number*2}`)
// })

// const user=[
//     {name:"Satya",age:22},
//     {name:"santosh",age:25},
//     {name:"Govind",age:30},
//     {name:"Shravani",age:26},
// ]

// //Application Area of ForEach
// user.forEach(function(user){
//     console.log(user.name)
// })

// //fOR Of Loop
// for(let users of user){
//     console.log(users.name)
// }


// //By Using Arrow Function
// user.forEach((user)=>{
//     console.log(user.name)
// })

// //MAP METHOD
// const arr=[3,4,7,8];
// const root=(arr)=>{
//     return arr/2
// }

// const res=arr.map(root)
// console.log(res)


const user=[
    {name:"Satya",age:22},
    {name:"santosh",age:25},
    {name:"Govind",age:30},
    {name:"Shravani",age:26},
];

let alluser=user.map((user)=>{
    return `Name:${user.name} age: ${user.age}` 
})

console.log(alluser)



