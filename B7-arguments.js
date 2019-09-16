// const name = ['truong', 'tien', 'chung'];
// for (let i = 0; i < name.length; i++){
//     console.log(name[i]);
// }

function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
console.log(sum(1, 4, 4, 6, 10, 20));

function sum1() {
    const number = Array.from(arguments);
    return number.reduce(function (sum,num) {
        return sum + num;
    },0)//reduce nhan 2 tham so:1 ham, 2 gia tri bat dau
}
console.log(sum1(1, 4, 4, 6, 10, 20,33));
