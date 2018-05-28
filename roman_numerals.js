function to_roman (num) {
  var hasil = '';

  while (num >= 1000 && num <= 3000) {
    hasil = hasil + 'M';
    num = num - 1000;
  }
  while (num >= 500) {
    hasil = hasil + 'C';
    num = num - 500;
  }
  while (num >= 400) {
    hasil = hasil + 'CD';
    num = num - 400;
  }
  while (num >= 100) {
    hasil = hasil + 'D';
    num = num - 100;
  }
  while (num >= 50) {
    hasil = hasil + 'L';
    num = num - 50;
  }
  while (num >= 40) {
    hasil = hasil + 'XL';
    num = num - 40;
  }
  while (num >= 10) {
    hasil = hasil + 'X';
    num = num - 10;
  }
  while (num >= 9) {
    hasil = hasil + 'IX';
    num = num - 9;
  }
  while (num >= 5) {
    hasil = hasil + 'V';
    num = num - 5;
  }
  while (num >= 4) {
    hasil = hasil + 'IV';
    num = num - 4;
  }
  while (num >= 1) {
    hasil = hasil + 'I';
    num = num - 1;
  }

  return hasil;
  // your implementation code here
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
