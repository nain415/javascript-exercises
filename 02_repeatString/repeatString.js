const repeatString = function(str,num) {

    append = str;
    output = '';

    while (num > 0) {
        output += append;
        num--;
    };

    return output;

};

// Do not edit below this line
module.exports = repeatString;
