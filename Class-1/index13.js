//Object:Object Store Key Value pairs

//Object Always Referance Type

// const car={
//     name:"tesla",
//     wheel:4,
//     color:["Black","Red","Green","Yellow"]
// };
// console.log(car.name);
// console.log(car.wheel);
// 
// car.seat="Front";
// console.log(car);

// console.log(car["name"]);
// console.log(car["wheel"]);

// for(let key in car){
//     console.log(key,": ",car[key]);
// }

let key1="objectkey1";
let key2="objectkey2";

let Value1="objectvalue1";
let Value2="objectvalue2";

let obj={
    [key1]:Value1,
   [ key2]:Value2,
}

console.log(obj);
