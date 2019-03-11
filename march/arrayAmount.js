function countArrayAmount(arr) {
  let result = arr.reduce(function(sum, current){  
    if(typeof current === 'number'){
      return sum+current;
    } else if(typeof current === 'object'){
      let subArrSum = current.reduce(function(sum, current){ 
        return sum + current;
      })
      return sum+subArrSum;
    } else {
      const correctPattern = /\d+[a-z]/;
      if(current.match(correctPattern)){
         for(let i= 0; i< current.length; i++){
          if(!isNaN(+current[i].substring())){
            current = +current[i].substring();
            return sum + current;
          }       
        }   
      } else {
        return sum;
      }
    } 
  }, 0);
  return result;
}

countArrayAmount([1, 2, '3x']);
countArrayAmount([1, 2, 'x3']);
countArrayAmount([1, [1, 2], 2]);