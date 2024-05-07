
function changeM(matrix){
    max=matrix[0][0]
    matrix.forEach(element => {
        element.forEach(elem=>{
            if (elem<max)
            max=elem
        })
    });
    newM=[]
    matrix.forEach(element => {
        newmm=[]
        element.forEach(elem=>{
            if (elem%2!=0)
                newmm.push(elem*max)
            else
                newmm.push(elem)
        })
        newM.push(newmm)
    });
    return newM
}
matrix=[
    [5, 3, 6], 
    [7, 11, 2],
    [15, 9, 4]
   ]
console.log(changeM(matrix))