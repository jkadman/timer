// const args 
// console.log(args);

// const beeper = function (interval) {
  // interval = process.argv.slice(2);
  // for (let int of interval) {
    // setTimeout(() => {
      // console.log('.');
    // }, int * 1000);
  // }
// }
// 
// beeper();
// 

const beeper = function (interval) {
  interval = process.argv.slice(2);
  if (interval === NaN) {
    return '';
  } else {
  interval.forEach(element => {
    setTimeout(() => {
      console.log('.')
    }, element * 1000)
  })
  }
  
}

beeper()