const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((accum, num) => accum += num, 0);
};

const multiply = function(arr) {
  return arr.reduce((accum, num) => accum *= num, 1);
};

const power = function(num, pow) {
	return num**pow;
};

const factorial = function(num) {
  let finalcount = 1;
  for (let i = 1; i < num; i++) {
    finalcount *= i+1;
  };
  return finalcount;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
