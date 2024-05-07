function NotificationException() {}
function ErrorException() {}
function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if(rand > 0.85) {
    throw new ErrorException()
  } else {
    throw new NotificationException()
  }
}

function reliableMultiply(a, b) {
  try{
     return primitiveMultiply(a,b)}
    catch(e){
        if(e instanceof ErrorException)
            console.log("ExceptionError")
        else if(e instanceof NotificationException)
        {console.log("NotificationException")
            return primitiveMultiply(a,b)}
    }
}
console.log(reliableMultiply(8, 8));