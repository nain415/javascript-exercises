const ftoc = function(fahr) {
  return ((fahr - 32)*(5/9)*cel).toFixed(1);
};

const ctof = function(cel) {
  return ((9/5)*fahr + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
