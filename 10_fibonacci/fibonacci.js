const fibonacci = function(num) {
    let number = Number(num);
    if(number === 0) return 0;
    if(number < 0) return "OOPS";
    let prev = 0;
    let temp = 0;
    let curr = 1;
    for(let i=0; i<number; i++){
        temp = curr;
        curr += prev; 
        prev = temp;             
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
