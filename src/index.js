const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '*****': ' ',
};

function decode(expr) {
  // Declare variables
  // Convert input data to array
  let exprToArray = expr.split('');
  let preResult = []
  let arr3 = [];
  let result = [];
  exprToArray.forEach((item, index) => {
    if (!((index + 1) % 2)) {
      arr3.push(item);
      preResult.push(arr3);
      arr3 = [];
    } else {
      arr3.push(item);
    }
  });
  
  preResult.forEach((item, index) => {
    if (item[0] === '1' && item[1] === '0') {
      result.push('.');
    } else if (item[0] == '1' && item[1] === '1') {
      result.push('-');
    } else if (item[0] == '*' && item[1] === '*') {
      result.push('*');
    }
    if (!((index + 1) % 5)) {
      result.push('+');
    }
  })

  return result.join('').split('+').map(item => {
    return MORSE_TABLE[item];
  }).join('');

}

module.exports = {
  decode
}