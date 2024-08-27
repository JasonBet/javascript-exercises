const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    let small;
    let big;
    let sumAll = 0;
    if (a < b) {small = a; big = b;}
    else {small = b; big = a;}
    for (let i = small; i <= big; i++) {
        sumAll += i;
    }

    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
