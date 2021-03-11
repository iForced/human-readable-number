module.exports = function toReadable (number) {
  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = 'hundred';
  let numArr = number.toString().split('');
  let res = [];

  if (number === 0) {
      return 'zero';
  } else if (number === 10) {
    return teens[0];
  } else if (!(number % 10) && number < 100) {
    res.push(tens[(number - 20) / 10]);
  } else if (number < 10) {
    res.push(ones[number]);
  } else if (number < 20) {
      res.push(teens[number - 10]);
  } else if (number > 19 && numArr.length < 3) {
    if(numArr[0] == '2') {
        res.push(tens[0] + ' ' + ones[number % 20]);
    } else if (numArr[0] == '3') {
        res.push(tens[1] + ' ' + ones[number % 30]);
    } else if (numArr[0] == '4') {
      res.push(tens[2] +  ' ' + ones[number % 40]);
    } else if (numArr[0] == '5') {
      res.push(tens[3] +  ' ' + ones[number % 50]);
    } else if (numArr[0] == '6') {
      res.push(tens[4] +  ' ' + ones[number % 60]);
    } else if (numArr[0] == '7') {
      res.push(tens[5] +  ' ' + ones[number % 70]);
    } else if (numArr[0] == '8') {
      res.push(tens[6] +  ' ' + ones[number % 80]);
    } else if (numArr[0] == '9') {
      res.push(tens[7] +  ' ' + ones[number % 90]);
    }
  } else if (number > 99 && numArr.length < 4) {
    if (!(number % 100)) {
      res.push(ones[number / 100] + ' ' + hundred);
    } else if ((number % 100) < 10) {
      res.push(ones[Math.floor(number / 100)] + ' ' + hundred + ' ' + ones[number % 100]);
    } else if ((number % 100) < 20) {
      res.push(ones[Math.floor(number / 100)] + ' ' + hundred + ' ' + teens[(number % 100) - 10]);
    } else if (!(number % 10)) {
        res.push(ones[Math.floor(number / 100)] + ' ' + hundred + ' ' + tens[((number % 100) / 10) - 2]);
    } else {
      res.push(ones[Math.floor(number / 100)] + ' ' + hundred + ' ' + tens[(Math.floor((number % 100) / 10)) - 2] + ' ' + ones[number % 10]);
    }
  }
  return res.join('');
}
