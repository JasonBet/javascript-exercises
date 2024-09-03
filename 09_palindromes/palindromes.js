const palindromes = function (string) {
    string = string.toLowerCase();
    let arr = string.split('');
    arr = arr.filter(char => char !== '.' && char !== ',' && char !== ' ' && char !='!');
    for(let i=0; i<=arr.length / 2; i++){
        if(arr[i] !== arr[arr.length - 1 - i]) {return false;}
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
