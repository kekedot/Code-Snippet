function getSum(...numbers) {
    let total = 0;
    for( let number of numbers) {
        total += number;
    }

    return total;
}


function getAvg(...numbers) {
    let total = 0;
    for( let number of numbers) {
        total += number;
    }

    return total / numbers.length;
}

const result = getAvg(1, 2, 3, 4);

console.log(result);