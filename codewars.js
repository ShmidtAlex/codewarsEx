// function iqTest(numbers) {
//   numbers = numbers.split(' ').map(function(elem){return parseInt(elem)});

//   let odd = numbers.filter(function(elem){return elem % 2 !== 0});
//   let even = numbers.filter(function(elem){return elem % 2 === 0});

//   return odd.length < even.length ? (numbers.indexOf(odd[0]) +1) : (numbers.indexOf(even[0] + 1));
// }

// iqTest("2 2 3 4");


// function disemvowel(str) {
//  return str.match(/[^aeiou]/gi).join();  
// }
// disemvowel("This website is for losers LOL!");

// //I could improve my cod like this:
// function maskify(cc) {
//   cc = cc.split('');
//   for (let i = 0; i < cc.length; i++) {
//     cc.splice(i, 1, "#");   
//   }
//   return cc.join();
// }
// maskify('4556364607935616');
// //instead of this:
// // function maskify(cc) {
// //  let arr = cc.split('');
// //  let arrLength;
// //  if (arr.length > 4) {
// //    arrLength = arr.length-4;
// //  } else arrLength = 0;
// //  for (let i = 0; i < arrLength; i++) {
// //    arr.splice(i, 1, "#");
// //    return arr.join();
// //  }
// // }
// // maskify('4556364607935616');
// function Fighter(name, health, damagePerAttack) {
//   this.name = name;
//   this.health = health;
//   this.damagePerAttack = damagePerAttack;
//   this.toString = function() { return this.name; }
// }
// function declareWinner(fighter1, fighter2, firstAttacker) {
//   let attackingFighter = firstAttacker === fighter1.name ? fighter1 : fighter2;
//   let attackedFighter = firstAttacker === fighter1.name ? fighter2 : fighter1;
//   //let initialHealth = attackedFighter.health;
//   for (let i = 0; i < attackedFighter.health; i++) {    
//     if (attackedFighter.health <= attackingFighter.damagePerAttack){
//       //console.log(attackingFighter);
//       return attackingFighter.name;
//     } else {
//       attackedFighter.health = attackedFighter.health - attackingFighter.damagePerAttack;
//       //console.log(attackedFighter.name + " health: " + attackedFighter.health);
//       if(attackedFighter.health > 0) {
//         attackingFighter.health = attackingFighter.health - attackedFighter.damagePerAttack;
//         //console.log(attackingFighter.name + " health: " + attackingFighter.health);
//         if (attackingFighter.health <= 0){
//           //console.log(attackedFighter.name);
//           return attackedFighter.name;
//         }
//       } 
//     }    
//   }  
// }
// declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry");

// // PATTERN RECOGNITION
// //return the total number of smiling faces in the array
// //my way:
// function countSmileys(arr) {
//   let counter = 0;
//   for(let i = 0; i < arr.length; i++) {    
//     if(testEyes(arr[i]) && testNoses(arr[i]) && testSmiles(arr[i])){
//       counter++;
//       console.log(counter);
//     }
//   }
//   return counter;
// }
// function testEyes(elem){
//   let rightOrderCheck = elem.split('');
//   return rightOrderCheck[0].match(/[;:]/g) ? true : false;
// }
// function testNoses(elem){
//   let rightOrderCheck = elem.split('');
//   if(elem.length === 3){
//     return rightOrderCheck[1].match(/[\s-~]/g) ? true : false;
//   } else return true;  
// }
// function testSmiles(elem){
//   let rightOrderCheck = elem.split('');
//   if(elem.length === 3){
//     return rightOrderCheck[2].match(/[)D]/g) ? true : false;
//   } else return rightOrderCheck[1].match(/[)D]/g) ? true : false;
// }
// // countSmileys([]);
// // countSmileys([':D',':~)',';~D',':)']);
// // countSmileys([':)',':(',':D',':O',':;']);
// countSmileys([';]', ':[', ';*', ':$', ';-D']);

// //best practices
// function countSmileys(arr) {
//   //symols ^...$, if used together, means that expression have to be: strict ordered, included only certain symbols
//   //? makes symbol optional(there can be no one symbol for nose)
//   //test() means check if string contains the pattern and combined with filter() check this way whole array

//    let newArr = arr.filter(function(x){return /^[:;][-~]?[D)]$/.test(x)}).length;


//  //return arr.filter(x => /^[:;][-~]?[D)]$/.test(x)).length;  
// }
// countSmileys([';]', ':[', ';*', ':$', ';-D']);

// //in this case my solution is quite well
// function validParentheses(parens){
//  //parens = parens.replace(/[^\(\)]+/g, '');
//   do {
//     parens = parens.replace(/(\(\))/g, '');
//   } while (parens.includes("()"));
//   if (parens === ""){
//     return true;
//   } else return false;   
// }
// validParentheses( "(((((((((((((((((((((((())))))))))))))))))))))))" );


// String.prototype.camelCase=function(){
//   let newArr = this.split('');
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] !== ' ' && i === 0) {
//       newArr[i] = newArr[i].toUpperCase();
//     } else if (newArr[i] === ' ' && i < newArr.length-1){
//       newArr[i+1] = newArr[i+1].toUpperCase();
//     } 
//   } console.log(newArr.filter(unit => unit !== " ").join(''));
//   return newArr.filter(unit => unit !== " ").join('');  
// }
// "say hello ".camelCase();

// //the best practices solution:
// String.prototype.camelCase = function() {
//   console.log(this.split(' ').map(function(word){ return word.charAt(0).toUpperCase() + word.slice(1)}).join(''));
//   return this.split(' ').map(word => word.charAt(0).toUpperCase + word.slice(1)).join('');
// }
// // String.prototype.camelCase=function(){
// //    return this.split(' ').map(function(word){
// //     return word.charAt(0).toUpperCase() + word.slice(1);
// //   }).join('');
// // }
// " ohh say hello please ".camelCase();
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