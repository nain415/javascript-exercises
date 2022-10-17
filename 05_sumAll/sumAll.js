const sumAll = function(int1,int2) {

    if (typeof(int1) != "number" || typeof(int2) != "number") return "ERROR";
    if (int1 < 0 || int2 < 0) return "ERROR";

    let smallestInt = int1;
    let biggestInt = int2;

    if (int1 > int2) {
        biggestInt = int1;
        smallestInt = int2;
    };

    let sum = 0;

    for (let i = smallestInt; i <= biggestInt; i++) {
        sum+=i;
    };

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
