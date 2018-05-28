function to_roman (num) {
  // your implementation code here
  var str = ''

  while (num > 0) {
    if (num > 0) {
      if (num >= 1000) {
       str += 'M' 
       num -= 1000
      }else{
        if (num >=900) {
          str += "CM"
          num -= 900
        }else{
          if (num >= 500) {
            str += 'D'
            num -= 500
          }else{
            if (num >= 400) {
              str += 'CD'
              num -= 400
            }else{
              if (num >= 100) {
                str += 'C'
                num -= 100
              }else{
                if (num >= 90) {
                  str += 'XC'
                  num -= 90
                }else{
                  if (num >= 50) {
                    str += 'L'
                    num -= 50
                  }else{
                    if (num >= 40) {
                      str += 'XL'
                      num -= 40
                    }else{
                      if (num >= 10) {
                        str += 'X'
                        num -= 10
                      }else{
                        if (num == 9) {
                          str += 'IX'
                          num -= 9
                        }else{
                          if (num >= 5 && num <= 8) {
                            str += 'V'
                            num -= 5
                          }else{
                            if (num == 4) {
                              str += 'IV'
                              num -= 4
                            }else{
                              if (num >= 1 && num <= 3) {
                                str += 'I'
                                num -= 1
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } 
    }
  }
  return str
  
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
