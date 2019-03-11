function abbreviate(string) {
    let finalArr = [];
    let separatorsType = /[\s-]/;
    let wordArr = string.split(separatorsType);
    //console.log(wordArr);
    let separatorsArr = [];
    let arr = string.split('');
    let condensedWord = arr.reduce(function(previousValue, currentItem) {
        if (currentItem.match(separatorsType)) {
            separatorsArr.push(currentItem);
        }
    })
    console.log(separatorsArr);
    for (let i = 0; i < wordArr.length; i++) {
        let result = wordArr[i].split('');
        let deletedLetters = result.length - 2;
        result.splice(1, deletedLetters, deletedLetters.toString());
        let joinedItem = result.join('');
        finalArr.push(joinedItem);
    }
    
    
      for (let i = 0; i < finalArr.length; i++){
        console.log(finalArr[i]);
        for (let j = 0; j < separatorsArr.length; j++) {
          //console.log("i:" + finalArr[i] + "j:" +separatorsArr[j]);
          //finalArr.push(separatorsArr[j]);  
        } 
      }
    
    console.log(finalArr);
    
    // let arr;
    // let splitSign =  /[\s-]/;
    // if(string.match(splitSign)){
    //  arr = string.split(splitSign);
    //  if(arr){
    //     for (let i = 0; i < arr.length; i++){
    //       let result = arr[i].split('');
    //       let deletedLettersNumber = result.length-2;
    //       let consisedLetters = result.splice(1, deletedLettersNumber, deletedLettersNumber.toString());
    //       console.log(result.join(splitSign));

    //       console.log('result: ' + result);
    //       console.log('deletedLettersNumber: ' + deletedLettersNumber);
    //       console.log('consisedLetters: ' + consisedLetters);
    //     }
    //   }
    //}
}
abbreviate('internati onalization');
abbreviate('acc essib ility');
abbreviate('Accessibility');
abbreviate('elephant-ride');