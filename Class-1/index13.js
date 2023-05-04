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

// console.log(obj);


//Apred Operators

const obj1={
    name1:"apred",
    age1:22
};
const obj2={
    name:"paped",
    age:25
};

const newobj={...obj1,...obj2}
console.log(newobj);


//Object Destructuring 

const school={
    name1:"Raju",
    name2:"Rahul"
}

const {name1:var1,name2:var2}=school;
console.log(var1);
console.log(var2);




// const school2={
//     name1:"Raju",
//     name2:"Rahul"
// }

// const {name1:var2,name2:var3}=school;
// console.log(var1);
// console.log(var2);

