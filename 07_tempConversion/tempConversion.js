const ftoc = function(fahr) {
  let convertedNum = ((fahr - 32)*(5/9)).toFixed(1);
  convertedNum = Number(convertedNum);

  if (convertedNum === Math.floor(convertedNum)) return Math.trunc(convertedNum);
  else return convertedNum;

};

const ctof = function(cel) {
  let convertedNum = ((9/5)*cel + 32).toFixed(1);
  convertedNum = Number(convertedNum);

  if (convertedNum === Math.floor(convertedNum)) return Math.trunc(convertedNum);
  else return convertedNum;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
