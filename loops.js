//var array = new Array();

//function forLoop(array) {
  //for (let i = 0; i < 25; i++) {
    //if (i === 1) {
      //return ['I am 1 strange loop.', ...array];
  //} else {
    //return ['I am ${i} strange loops.', ...array];
    //}
  //}
//}
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i===1) {
      array.push('I am 1 strange loop.')
    } else {
      array.push(`I am, ${i} strange loops.`)
    }
  }
  return array;
}
