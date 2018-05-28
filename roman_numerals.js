

function to_roman (num) {

  let number = num
  
  const romanLib = 
  [
    {
      name: 'I',
      value: 1
    }, {
      name: 'IV',
      value: 4
    }, {
      name: 'V',
      value: 5
    }, {
      name: 'IX',
      value: 9
    }, {
      name: 'X',
      value: 10
    }, {
      name: 'XL',
      value: 40
    }, {
      name: 'L',
      value: 50
    }, {
      name: 'XC',
      value: 90
    }, {
      name: 'C',
      value: 100
    }, {
      name: 'CD',
      value: 400
    }, {
      name: 'D',
      value: 500
    }, {
      name: 'CM',
      value: 900
    }, {
      name: 'M',
      value: 1000
    }
  ]

  const romanLibRe = romanLib.reverse()
  
  let roman = ''

  while(number>0) {
    for(let x=0; x<romanLibRe.length; x++) {
      if(number >= romanLib[x].value) {
        roman += romanLib[x].name
        number -= romanLib[x].value
        break
      }
    }
  }

  return roman
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
