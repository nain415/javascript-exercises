const removeFromArray = function(arr) {
    filterValues = Array.prototype.slice.call(arguments,1);

    arr = arr.filter(val => !(val in filterValues));
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
