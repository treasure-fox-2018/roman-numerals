


// function to_roman(num) {
//   // your implementation code here
//   return num


// }

// // Drive code
// console.log('My totally sweet testing script for new roman\n')
// console.log('input | expected | actual')
// console.log('——————|——————————|———————')
// console.log('4     | IV       | ', to_roman(4))
// console.log('9     | IX       | ', to_roman(9))
// console.log('13    | XIII     | ', to_roman(13))
// console.log('1453  | MCDLIII  | ', to_roman(1453))
// console.log('1646  | MDCXLVI  | ', to_roman(1646))

//add object `romawi` including each unique structure of rome letter
// add variable `result`=' ' 
//loop object `romawi`in variable `key`
//while num >= value of object romawi
//num - romawi value
//result+=key/value of romawi
//declare result



function toRoman(num) {




  var romawi = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
  var result = ''

  for (key in romawi) {

    while (num >= romawi[key]) {
      num -= romawi[key];
      result += key;
    }
    // console.log([key, romawi[key]])

  }
  return result

}
console.log(toRoman(800))
