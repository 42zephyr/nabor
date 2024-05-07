function bulkRun(array,func){
    return function(func){
        results=[]
        array.forEach(element => {
          console.log(element[0](element[1].push(func)))
            results.push(element[0](element[1].push(func)))
        });
    }
}

const f1 = (cb) => {cb(1)}
const f2 = (a, cb) => {cb(a)}
const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}

console.log(bulkRun(
  [
    [f1, []],
    [f2, [2]]
    [f3, [3, 4]]
  ],alert
)(console.log))
 // Output: [1, 2, [3, 4]]