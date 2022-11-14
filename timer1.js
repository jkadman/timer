const beeper = function (interval) {
  interval = process.argv.slice(2);
  if (onlyNumbers(interval) && (interval < 0 === false)) {
    interval.forEach(element => {
      setTimeout(() => {
        console.log('.')
      }, element * 1000)
    })
  } else {
    return ''
  }
};

beeper()

// a function to check if only numbers are submitted to the beeper function
function onlyNumbers(array) {
  return array.every(element => {
    return !isNaN(element);
  });
};