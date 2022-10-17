const ftoc = function(cel) {

  return (32 + (9/5)*cel).toFixed(1);

};

const ctof = function(fahr) {
  return (5/9)*(fahr - 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
