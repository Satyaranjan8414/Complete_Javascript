const rootnode=document.getRootNode();
// console.log(rootnode);
const htmlnode= rootnode.childNodes[0]
//console.log(htmlnode.childNodes)//NodeList(3) [head, text, body]

const headnode=htmlnode.childNodes[0]
console.log(headnode.cloneNode)

// const testnode=htmlnode.childNodes[1]
// console.log(testnode)

// const bodynode=htmlnode.childNodes[2]
// console.log(bodynode)

// 5:7--Traversing the tree