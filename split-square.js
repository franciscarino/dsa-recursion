'use strict';

function dump(squares, out = []) {
  for (let square of squares) {
    if (Array.isArray(square)) {
      dump(square, out);
    } else {
      out.push(square);
    }
  }
  return out.join(" ");
}


function validate(squares) {
  //true if all 0s and 1s && arr.length === 4
  if (squares === 1 || squares === 0) return true;

  if (Array.isArray(squares) && squares.length === 4) {
    for (let square of squares) {
      if (Array.isArray(square)) {

        return validate(square);

      } else if (square !== 0 && square !== 1) {
        return false;
      }
    }
    return true;
  }
  return false;
}
