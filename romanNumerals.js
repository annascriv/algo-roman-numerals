function toRomanLazy(num) {
  let output = "";
  let romanNumeralToArabic = {
    'M':1000,
    'D':500,
    'C':100,
    'L':50,
    'X':10,
    'V':5,
    'I':1
      }   

  for (let i of Object.keys(romanNumeralToArabic)) {
    let ind = Math.floor(num/romanNumeralToArabic[i]);
    num-=ind*romanNumeralToArabic[i];
    output+=i.repeat(ind);
  }

  return output;
  } 

function toRoman(num) {
  let output = "";
  let romanNumeralToArabic = {
    'M':1000,
    'CM':900,
    'D':500,
    'CD':400,
    'C':100,
    'XC':90,
    'L':50,
    'XL':40,
    'X':10,
    'IX':9,
    'V':5,
    'IV':4,
    'I':1
      }   

  for (let i of Object.keys(romanNumeralToArabic)) {
    let ind = Math.floor(num/romanNumeralToArabic[i]);
    num-=ind*romanNumeralToArabic[i];
    output+=i.repeat(ind);
  }

  return output;
}

module.exports = { toRoman, toRomanLazy };
