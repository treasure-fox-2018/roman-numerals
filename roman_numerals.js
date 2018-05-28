// Roman Numeral ===> Arabic Numeral
// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

function to_roman (num) {
  // your implementation code here
  var numArab = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var numRoman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']


  var result=""
  for(var i = 0; i<=numArab.length ; i++){
    while(numArab[i]<=num){
      result += numRoman[i]
      num = num -numArab[i]
    }
  }
  return result

}

// console.log(to_roman(4))
// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
