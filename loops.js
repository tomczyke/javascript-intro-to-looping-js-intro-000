var array = new Array();

function forLoop(array) {
  for (let i = 0; i < 2; i++) {
    array.push('I am 1 strange loop.')
  }
  for (let i = 1; i < 25; i++) {
    array.push('I am ${i} strange loops.')
  }
}
