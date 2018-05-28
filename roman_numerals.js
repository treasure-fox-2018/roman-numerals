function to_roman (num) {
  //change num type to string
  num = String(num)
  //init 2 dimentional empty array to store digit number and their value , ex [4,100] , [7,10] etc
  var numArr = [];
  for (let i = 0 ; i<num.length ; i ++) {
    if (numArr[i] === undefined) {
      numArr.push([]);
    }
    numArr[i].push(Number(num[i]));
    let pengali = Math.pow(10,(num.length-i-1));
    numArr[i].push(pengali);
  }
  // console.log(numArr)
  var output="";
  for (let j = 0 ; j < numArr.length ; j++ ) {
    if (numArr[j][0] <= 3) {
      let romawi ="";
      if (numArr[j][1] === 1) {
        romawi="I";
      }
      if (numArr[j][1] === 10) {
        romawi="X";
      }
      if (numArr[j][1] === 100) {
        romawi="C";
      }
      if (numArr[j][1] === 1000) {
        romawi="M";
      }
      for (let k = 0; k < numArr[j][0] ;k++) {
        output+=romawi
      }
    }
    if (numArr[j][0] === 4) {
      let romawi ="";
      if (numArr[j][1] === 1) {
        romawi="IV";
      }
      if (numArr[j][1] === 10) {
        romawi="XL";
      }
      if (numArr[j][1] === 100) {
        romawi="CD";
      }
      output += romawi;
    }
    if (numArr[j][0] === 5) {
      let romawi ="";
      if (numArr[j][1] === 1) {
        romawi="V";
      }
      if (numArr[j][1] === 10) {
        romawi="L";
      }
      if (numArr[j][1] === 100) {
        romawi="D";
      }
      output += romawi;
    }
    if (numArr[j][0] > 5 && numArr[j][0] < 9) {
      let romawiSatuan ="";
      let romawiLima = "";
      if (numArr[j][1] === 1) {
        romawiSatuan="I";
        romawiLima="V";
      }
      if (numArr[j][1] === 10) {
        romawiSatuan="I";
        romawiLima="V";
      }
      if (numArr[j][1] === 100) {
        romawiSatuan="C";
        romawiLima="D";
      }
      let temp= "";
      for (let k = 0; k < (numArr[j][0]-5);k++) {
        temp+=romawiSatuan;
      }
      output += romawiLima+""+temp;
    }
    if (numArr[j][0] === 9) {
      let romawi ="";
      if (numArr[j][1] === 1) {
        romawi="IX";
      }
      if (numArr[j][1] === 10) {
        romawi="XC";
      }
      if (numArr[j][1] === 100) {
        romawi="CM";
      }
      output += romawi;
    }
  }
  return(output)
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
