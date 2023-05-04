//Object:Object Store Key Value pairs

//Object Always Referance Type

const car={
    name:"tesla",
    wheel:4,
    color:["Black","Red","Green","Yellow"]
};
// console.log(car.name);
// console.log(car.wheel);

car.seat="Front";
// console.log(car);

// console.log(car["name"]);
// console.log(car["wheel"]);

for(let key in car){
    console.log(car[key]);
}


