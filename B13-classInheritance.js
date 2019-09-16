// class animal{
//     constructor(name) {
//         this.name = name;
//     }
//     eat() {
//         console.log('eating....');
        
//     }
// }
// class cat extends animal{
//     run() {
//         console.log('running');
//     }
// }
// const Cat = new cat('truong');

// console.log(Cat.run());


function animal(name) {
    this.name = name;

}
animal.prototype.eat = function () {
    console.log('eating');
}
function Dog(name) {
    
    animal.apply(this,arguments);
}
Dog.prototype = new animal();
// console.log(Dog.prototype =new animal());
var run = new animal();
run.Dog();
run.eat();