const repeatString = function(str,num) {

    append = str;

    while (num > 1) {
        str += append;
        num--;
    };

    return str;

};

// Do not edit below this line
module.exports = repeatString;
