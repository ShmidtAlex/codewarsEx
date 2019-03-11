let container = document.getElementById('result');
console.log(container);

function consizingArray(arr) {
   
    arr.sort(function(a, b) {
        return [a - b];
    });
    console.log(arr);
    let finalArray = [];
    let resultArray = [];

    function fillFinalArray(arr) {
        let ethalon;
        let subArr = [];
        arr.forEach(function(elem, i, arr) {
            if (elem === ethalon + 1 || ethalon === undefined) {
                subArr.push(elem);
                ethalon = elem;
                if (i === arr.length - 1) {
                    finalArray.push(subArr);
                }
            } else {
                finalArray.push(subArr);
                subArr = [];
                subArr.push(elem);
                ethalon = elem;
                if (i === arr.length - 1) {
                    finalArray.push(subArr);
                }
            }
        })
    }
    fillFinalArray(arr);
    finalArray.forEach(function(elem){
      if(elem.length > 1){
        let min = Math.min(...elem);
        let max = Math.max(...elem);
        elem.splice(0, elem.length-1, min, "-");
      } 
      resultArray.push(elem.join(''));
    }) 
    return resultArray.join(',');
}
consizingArray([3, -11, -12, 2, 1, 5, 6, 35, 34, 33, -1, 10]);