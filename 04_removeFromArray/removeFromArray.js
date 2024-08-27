const removeFromArray = function(args, ...argsToRemove) {
    return args.filter(item => !argsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
