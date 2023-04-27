// let day=0
// By using if/else-if/Else codition

//Daily calendar 


// let day=+prompt("Plaese Gusess the day")

// if(day==0){
//     console.log("sunday");
    
// }else if(day==1){
//     console.log("Monday");
    
// }else if(day==2){
//     console.log("Tuesday");
    
// }else if(day==3){
//     console.log("Wednesday");
    
// }else if(day==4){
//     console.log("Thursday");
    
// }else if(day==5){
//     console.log("Friday");
    
// }else if(day==6){
//     console.log("Saturday");
    
// }else{
//     console.log("Plaese Enter a valid day");
    
// }

//By Using Switch Statement


let day=+prompt("Plaese Gusess the day")

switch (day) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("Monday");
        break;

    default:
        console.log("Not a valid Input");
        
        break;
}