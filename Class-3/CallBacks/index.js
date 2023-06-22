function fun(callback){
    console.log("Hi bro")
    callback()
}
fun(()=>{
    console.log("hello") 
})