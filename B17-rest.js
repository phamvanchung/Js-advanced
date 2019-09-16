function sum(...number) {
    return number.reduce((a,b) => a + b,0)
}

console.log(sum(1, 2, 3, 5));

//vd2
function concat(seperator,...string) {
    return string.join(seperator);
}
console.log(concat(' ','c', 'h', 'u', 'n', 'g'));
