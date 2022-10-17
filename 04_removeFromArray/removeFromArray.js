const removeFromArray = function(arr) {
    filterValues = Array.prototype.slice.call(arguments,1);

    arr = arr.filter(val => !(filterValues.includes(val)));
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
