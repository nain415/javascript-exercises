const repeatString = function(str,num) {

    append = str;
    output = '';

    while (num > 0) {
        output += append;
        num--;
    };

    return str;

};

// Do not edit below this line
module.exports = repeatString;
