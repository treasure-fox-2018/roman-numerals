function to_roman (num) {
  // your implementation code here
  // objek untuk menampung key romawi dengan nilai yang telah di tentukan
  var roman = {M: 1000, DM: 900, D: 500, CD: 400, C: 100, LC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1}
  var containRoman = '' // contain roman to string

  // looping key untuk mendapatkan value dari key
  for (var key in roman) {
    // looping ketika num lebihdari sama dengan value dari roman[key]
    while (num >= roman[key]/*true*/) {
      // kurangi num dengan value roman[key]
      num -= roman[key]

      containRoman += key
      // if (num === 0) {
      //   break;
      // }

      // ketika num < roman[key](false) maka looping akan berhenti
    }
  }
  return containRoman
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
