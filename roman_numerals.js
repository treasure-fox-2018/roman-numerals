function numSatuan(num) {
  var hasilSatuan = [] 
  if (num === 1) {
    hasilSatuan.push('I')
  } else if (num === 2) {
    hasilSatuan.push('II')
  } else if (num === 3) {
    hasilSatuan.push('III')
  } else if (num === 4) {
    hasilSatuan.push('IV')
  } else if (num === 5) {
    hasilSatuan.push('V')
  } else if (num === 6) {
    hasilSatuan.push('VI')
  } else if (num === 7) {
    hasilSatuan.push('VII')
  } else if (num === 8) {
    hasilSatuan.push('VIII')
  } else if (num === 9) {
    hasilSatuan.push('IX')
  }
  return hasilSatuan
}

function numPuluhan(num) {
  var hasilPuluhan = []
  if (num === 1) {
    hasilPuluhan.push('X')
  } else if (num === 2) {
    hasilPuluhan.push('XX')
  } else if (num === 3) {
    hasilPuluhan.push('XXX')
  } else if (num === 4) {
    hasilPuluhan.push('XL')
  } else if (num === 5) {
    hasilPuluhan.push('L')
  } else if (num === 6) {
    hasilPuluhan.push('LX')
  } else if (num === 7) {
    hasilPuluhan.push('LXX')
  } else if (num === 8) {
    hasilPuluhan.push('LXXX')
  } else if (num === 9) {
    hasilPuluhan.push('XC')
  }
  return hasilPuluhan
}

function numRatusan(num) {
  var hasilRatusan = []
  if (num === 1) {
    hasilRatusan.push('C')
  } else if (num === 2) {
    hasilRatusan.push('CC')
  } else if (num === 3) {
    hasilRatusan.push('CCC')
  } else if (num === 4) {
    hasilRatusan.push('CD')
  } else if (num === 5) {
    hasilRatusan.push('D')
  } else if (num === 6) {
    hasilRatusan.push('DC')
  } else if (num === 7) {
    hasilRatusan.push('DCC')
  } else if (num === 8) {
    hasilRatusan.push('DCCC')
  } else if (num === 9) {
    hasilRatusan.push('MD')
  }
  return hasilRatusan
}

function numRibuan(num) {
  var hasilRibuan = []
  if (num === 1) {
    hasilRibuan.push('M')
  } else if (num === 2) {
    hasilRibuan.push('MM')
  } else if (num === 3) {
    hasilRibuan.push('MMM')
  } else if (num > 3) {
    return ('Number is Too Big')
  }
  return hasilRibuan
}

function to_roman (num) {
  // your implementation code here
  var arrNum = []
  while (num >= 10) {
    var angkaAkhir = num % 10
    arrNum.push(angkaAkhir)
    num = Math.floor(num / 10)
  }
  arrNum.push(num)
  var hasil = []
  for (var a = 0; a < arrNum.length; a++) {
    if (a === 0) {
      var satuan = numSatuan(arrNum[a])
      hasil.unshift(satuan)
    } else if (a === 1) {
      var puluhan = numPuluhan(arrNum[a])
      hasil.unshift(puluhan)
    } else if (a === 2) {
      var ratusan = numRatusan(arrNum[a])
      hasil.unshift(ratusan)
    } else if (a === 3) {
      var ribuan = numRibuan(arrNum[a])
      hasil.unshift(ribuan)
    }
  }
  var hasilAkhir = ''
  for (var b = 0; b < hasil.length; b++) {
    hasilAkhir += hasil[b] 
  }
  return hasilAkhir
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