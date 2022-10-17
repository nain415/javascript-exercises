const ftoc = function(fahr) {
  return ((fahr - 32)*(5/9)).toFixed(1);
};

const ctof = function(cel) {
  return ((9/5)*cel + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
