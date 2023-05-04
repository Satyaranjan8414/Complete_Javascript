//Function is nothing but repeatation same code again and again without Rewrite the code

// function happyBirthday(){
//     console.log("Happy Birthday To You Happy BirthDay To Gn....du......")
// }

// happyBirthday()

// happyBirthday()

// happyBirthday()

// happyBirthday()
// happyBirthday()
// happyBirthday()
// happyBirthday()
// happyBirthday()
// happyBirthday()
// happyBirthday()


// function Addition(a,b){
//     console.log(a+b)
// }

// Addition(2,3)
// Addition(2,9)

//Code For Even and Odd value Checkers
// function iseven(a){
//     if(a%2==0){
//         console.log("True")
//     }else{
//         console.log("False")
//     }
// }
// iseven(3)

//fIND THE target value

function findThevalue(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
           
        
    }
    return -1;
}
let arr=[1,2,3,4,6,5]
// let target=4;
let newvalue=findThevalue(arr,4)
console.log(newvalue)