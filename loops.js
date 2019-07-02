//var array = new Array();

function forLoop(array) {
  for (let i = 0; i < 1; i++) {
    return [...array, 'I am 1 strange loop.']
  }
  for (let i = 1; i < 25; i++) {
    return [...array, 'I am ${i} strange loop.']
  }
}
