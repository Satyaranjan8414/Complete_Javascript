//Promise.Resolved
//Promise Chainning
function mypromise(resolve, reject) {
    return new Promise( (resolve, reject)=>{
        resolve("Monnlights");
    })
}

mypromise().then((res)=>{
    console.log(res);
    res+=" "+"bar";
    return res;
}).then((res)=>{
    console.log(res);

});