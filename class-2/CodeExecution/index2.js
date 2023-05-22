// function Execution Contest

let foo="foo"
console.log(foo)
function getDetails(name,age){
    console.log(arguments)
    let myvar="Hello World"
    console.log(myvar)
    const fulldetails=name +" "+age;
    return fulldetails;
}
const getData=getDetails("Satya",23)
console.log(getData)