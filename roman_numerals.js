function to_roman (num) {
  let romanNumeral = ['I','V','X','L','C','D','M'];
  let arabicNumeral = [1,5,10,50,100,500,1000];
  let stringNum = num.toString();
  let ones = stringNum.slice(-1);
  let tens = (stringNum.slice(-2))-(stringNum.slice(-1))
  let hundreds = (stringNum.slice(-3))-(stringNum.slice(-2));
  let thousands = (stringNum.slice(-4))-(stringNum.slice(-3));
  let onesRoman ='';
  let tensRoman = '';
  let hundredsRoman = '';
  let thousandsRoman = '';
    // return tens
    while(ones > 0){
      if(ones === '4'){
        onesRoman += 'IV';
        break;
      }
      if(ones === '9'){
        onesRoman += 'IX';
        break;
      }
      for(let z = arabicNumeral.length-1; z >= 0 ; z--){
        if(ones >= arabicNumeral[z]){
          onesRoman += romanNumeral[z];
          ones -= arabicNumeral[z];
          break
        }
      }
    }
    while(tens > 0){
      if(tens === 40){
        tensRoman += 'XL';
        break;
      }
      if(tens === 90){
        tensRoman += 'XC';
        break;
      }
      for(let z = arabicNumeral.length-1; z >= 0 ; z--){
        if(tens >= arabicNumeral[z]){
          tensRoman += romanNumeral[z];
          tens -= arabicNumeral[z];
          break
        }

      }
    }
    while(hundreds > 0){
      if(hundreds === 400){
        hundredsRoman += 'DC';
        break;
      }
      if(hundreds === 900){
        hundredsRoman += 'CM';
        break;
      }
      for(let z = arabicNumeral.length-1; z >= 0 ; z--){
        if(hundreds >= arabicNumeral[z]){
          hundredsRoman += romanNumeral[z];
          hundreds -= arabicNumeral[z];
          break
        }

      }
    }
    while(thousands > 0){
      for(let z = arabicNumeral.length-1; z >= 0 ; z--){
        if(thousands >= arabicNumeral[z]){
          thousandsRoman += romanNumeral[z];
          thousands -= arabicNumeral[z];
          break
        }

      }
    }
    return `${thousandsRoman}${hundredsRoman}${tensRoman}${onesRoman}`
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
