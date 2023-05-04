//Foreach
//Map
//Filters
const arr=[4,5,8,9]

// function myfun(number,i){
//     console.log(`index is ${i} number is ${number}`)
// }


// for(let i=0;i<arr.length;i++){
//     myfun(arr[i],i)
// }
// arr.forEach(myfun)

arr.forEach(function(number,i){
    console.log(`index is ${i} number is ${number*2}`)
})