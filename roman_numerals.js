//ROMAN NUMERALS
function toRoman(integer) {
    let angkaRoman = [1, 4, 5, 9, 10, 40, 50, 100, 400, 500, 900, 1000];
    let roman = ["I","IV","V","IX","X", "XL", "L", "C", "CD", "D", "CM", "M"]
    let result = []
    for (var i = angkaRoman.length-1; i >=0; i--) {
      if (angkaRoman[i]<=integer) {
        result.push(roman[i])
        integer-=angkaRoman[i]
        i++
      }
    }
    return result.join('')
}

console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('______|__________|_______');
console.log('  4   |    IV    |', toRoman(4));
console.log('  9   |    IX    |', toRoman(9));
console.log('  23  |   XXIII  |', toRoman(23));
console.log(' 1253 |   MCDLIII|', toRoman(1253));
console.log(' 1646 |   MDCXLVI|', toRoman(1646));
