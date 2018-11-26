const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}? (yes/no)`, (answer) => {
    if (answer === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if (isGreaterThan === true) {
        let smaller = arr[i+1];
        let larger = arr[i];
        arr[i] = smaller;
        arr[i+1] = larger;
      }
    });
  }
}
