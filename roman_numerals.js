function to_roman (value) {
  // your implementation code here
  const romanDict = { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 
                      40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 
                      500: 'D', 900: 'CM', 1000: 'M' };
  const numbers = Object.keys(romanDict); // returns arrays of the keys (which are the numbers)
  // const romans = Object.values(romanDict)
  let i = numbers.length - 1;
  let output = '';
  
  while(value !== 0) {
    let number = numbers[i]
    if (value - number >= 0) {
      value -= number;
      output += romanDict[number];
    }
    else {
      i--;
    }
  }
  return output;
}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
