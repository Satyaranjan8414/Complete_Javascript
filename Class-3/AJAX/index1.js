//BY Using Promise

const url="https://jsonplaceholder.typicode.com/posts";

function get(method ,url){
    return new Promise((resolve,reject)=>{
        const xhr =new XMLHttpRequest();
        xhr.open(method,url);
        
    xhr.onload=()=>{
        if(xhr.status>=200 && xhr.status<300){
            resolve(xhr.response)
        }else{
            reject("Server error")
        }
    }
    xhr.onerror=()=>{
            reject("Plaese Check the Internet connection")
        }

    xhr.send()
})
}

const newGet=get("GET",url)
.then(response=>{
    const data=JSON.parse(response)
    return data;
}).then(data=>{
    return data[3].id
}).then(id=>{
    const Url=`${url}/${id}`
    sendRequest("GET",Url)
})