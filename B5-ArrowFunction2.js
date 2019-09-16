var a = {
    foo: 'bar',
    run: function () {
        setTimeout(() => {
            console.log(this.foo);
        }, 2000)
    }
}
a.run();
// var a = {
//     foo: 'bar',
//     run: function () {
//         setTimeout(function () {
//             console.log(this.foo);
//         }, 2000);
//     }
// };
// a.run();
//cac cach in ra bar
//c1:.bind(this)
//c2:.bind(a)
//c3:var that=this . trong setTimeout that.foo
//c4 o tren