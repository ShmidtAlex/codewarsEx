function checkDescendingOrder(arr) {
  let ethalon = arr[0];
  let result;
  arr.forEach(function(elem, i, arr){
    if(elem <= ethalon){
      result = true;
      ethalon = elem;
    } else {
      result = false;
      return result;
    }
  })
  console.log(result)
  return result;
}
function checkAscendingOrder(arr) {
  let ethalon = arr[0];
  let result;
  arr.forEach(function(elem, i, arr){
    if(elem >= ethalon){
      result = true;
      ethalon = elem;
    } else {
      result = false;
      return result;
    }
  })
  console.log(result)
  return result;
}
function monotonyCheck(arr){
  if (arr[0] > arr[arr.length-1]){
    checkDescendingOrder(arr);
  } else {
    checkAscendingOrder(arr);
  }
}
monotonyCheck([0, 1, 5, 9, 15]);
monotonyCheck([0, 1, 1, 5, 9, 9, 15]);
monotonyCheck([15, 8, 4, 2, 1]);
monotonyCheck([0, 1, 5, 15, 4]);