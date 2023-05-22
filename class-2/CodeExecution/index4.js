//Closures are used 

function myfun(){
    function child(){
        console.log("This is Child")
    }
    return child;

}
const result = myfun();
result();