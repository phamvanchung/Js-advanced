var cat = {
    name: 'truong',
    age: 19,
    sayhi: function () {
        console.log('hi, my name is ', this.name);
        console.log('i am age:', this.age);
    }
}
var dog = {
    name: 'tien',
    age:20,
}
// mickey.sayhi();
var say = cat.sayhi.bind(dog);
say();