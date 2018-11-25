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

askIfGreaterThan(5,4,)
