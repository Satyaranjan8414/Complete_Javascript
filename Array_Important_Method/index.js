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


// const user=[
//     {name:"Satya",age:22},
//     {name:"santosh",age:25},
//     {name:"Govind",age:30},
//     {name:"Shravani",age:26},
// ];

// let alluser=user.map((user)=>{
//     return `Name:${user.name} age: ${user.age}` 
// })

// console.log(alluser)


//Filter Method


// let bag=""
// for(let i=0;i<num.length;i++){
//     if(num%2==0){
//         bag+=i
//     }else{
//         console.log("No")
//     }
//     console.log(bag)
// }
//bY Using MapMethod i can only Get the true false value
// let num=[1,2,3,4,5,6,7,8,9,10]

// const isven=num.map((num)=>{
//     return num%2==0
// })

// console.log(isven)

// let num=[1,2,3,4,5,6,7,8,9,10]

// const isven=num.filter((num)=>{
//     return num%2==0
// })

// console.log(isven)

//Reduce Method

//  let num=[1,2,3,4,5,6,7,8,9,10]

//  let sum=num.reduce((a,b)=>{
//     return a+b
    
//  })
//  console.log(sum);
 








