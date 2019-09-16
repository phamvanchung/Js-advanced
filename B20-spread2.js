const obj1={
    a: 1,
    b: 2,
    c:3,
}
let obj2 = {};
for (let key in obj1) {
    obj2[key] = obj1[key];
}
console.log(obj2);
