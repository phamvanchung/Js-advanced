const a = [1, 2, 3];
const b = [0, ...a, 4];
function sum() {
    return a + b;
}
console.log(sum(...a));

