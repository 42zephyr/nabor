function chunkArray(arr,count){
    
    return{
        next:
            function(){
                i=0
    newArr=[]
    console.log(arr)
    for(i=0;i<count;i++)
    if(arr.length!=0){
        newArr.push(arr[0])
        arr=arr.slice(1)}
    else
        break
                return newArr.length!=0
                ? { value: newArr, done: false }
                : { value:undefined,done: true };
            }
    }
}
const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
console.log(iterator.next()) // { value: [1,2,3], done: false }
console.log(iterator.next()) // { value: [4,5,6], done: false }
console.log(iterator.next()) // { value: [7,8], done: false }
console.log(iterator.next()) // { value: undefined, done: true }
console.log(iterator)