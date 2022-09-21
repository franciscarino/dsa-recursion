"use strict";

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

/** takes in a square and returns the maximally-simplified version of it */
function simplify(squares, out=[]) {
  console.log(squares);
  if (squares === 1 || squares === 0) return squares;

  if (squares.every((s) => s === 1)) {
    squares = 1;
    out.push(squares);
  } else if (squares.every((s) => s === 0)) {
    squares = 0;
    out.push(squares);
  }

  if (Array.isArray(squares)) {
    for (let s of squares) {
      if (Array.isArray(s)) {
        return simplify(s, out);
      } else {
        out.push(s);
      }

    }
  }
  if (out.length === 4) return simplify(squares = out, out = [])
  return out.length > 1 ? out : squares;
}

module.exports = {
  simplify,
};
