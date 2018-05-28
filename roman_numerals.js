function to_roman (num) {
  var arrOfObjConversion = [
    {
      number: 1,
      roman: "I"
    },
    {
      number: 4,
      roman: "IV"
    },
    {
      number: 5,
      roman: "V"
    },
    {
      number: 9,
      roman: "IX"
    },
    {
      number: 10,
      roman: "X"
    },
    {
      number: 40,
      roman: "XL"
    },
    {
      number: 50,
      roman: "L"
    },
    {
      number: 90,
      roman: "XC"
    },
    {
      number: 100,
      roman: "C"
    },
    {
      number: 400,
      roman: "CD"
    },
    {
      number: 500,
      roman: "D"
    },
    {
      number: 900,
      roman: "CM"
    },
    {
      number: 1000,
      roman: "M"
    }
  ];
  var i = 12;
  var tempoRomanConversion = '';
  var tempoNumberSum = 0;

  while (num !== 0) {
    var arrayAccessNumber = arrOfObjConversion[i].number;
    var arrayAccessRoman = arrOfObjConversion[i].roman;
    var inspector = num - arrayAccessNumber;
    // console.log(inspector);
    if (inspector >= 0) {
      num -= arrayAccessNumber;
      tempoRomanConversion += arrayAccessRoman;
      // console.log(tempoRomanConversion);
      // console.log(tempoNumberSum);
    } else if (inspector < 0) {
      // console.log("keluar");
      i --;
      // console.log(arrayAccessNumber);
      // console.log(arrayAccessRoman);
    }
  }
  return tempoRomanConversion;
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
