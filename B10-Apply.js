function sum() {
    const number = Array.from(arguments);
    return number.reduce(( sum, num)=> sum + num, 0);
}
function average() {
    const x = sum.apply(null, arguments);
    return x / arguments.length;
}
console.log(sum(1, 3, 4, 4));
console.log(average(5, 6, 4, 2, 3));
