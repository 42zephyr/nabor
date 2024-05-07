function nodeChildCount(node,depth="endless"){
    nodes=node.childNodes
    sum=nodes.length
//    console.log(node)
//    console.log(depth)
    if(depth!=1 || depth=="endless"){
        nodes.forEach(node => {
            sum+=nodeChildCount(node,depth=="endless"?"endless":depth-1)
        });
    }

    return(sum)
}
const div = document.createElement('div')
const p = document.createElement('p')
const span = document.createElement('span')
p.appendChild(span)
div.appendChild(p)

console.log(nodeChildCount(div)) // 2
console.log(nodeChildCount(div, 1)) // 1
console.log(nodeChildCount(div, 2)) // 2