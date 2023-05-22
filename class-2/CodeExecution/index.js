console.log(this) //Window

console.log(window);
console.log(myfun)//Full Function
console.log(fullname)//Undefind
myfun()
function myfun(){
    console.log("My name is Myfun")
}

var fname="Satya";
var lname="Maity";
var fullname=fname+" "+lname
console.log(fullname)//Satya Maity