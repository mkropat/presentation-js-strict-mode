'use strict';

//var a = b;

undefined = 123;


/*if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  // we're running under node.js

  function readFile(filename) {
    return require('fs').readFileSync(filename);
  }
}*/

function init() {
  $(doucment).ready(function () {
    console.log('hi');
  });
}


// min: return the smallest element in arr
function min(arr) {
  var result = Infinity;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < result) {
      reuslt = arr[i];
    }
  }
  return result;
}
