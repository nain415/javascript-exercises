const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.split('').filter(char => (char >= 'A' && char <= 'z')).join(''); //removes punctuation
    return  str === str.split('').reverse().join('').toLowerCase(); //reverses the string
};

// Do not edit below this line
module.exports = palindromes;
