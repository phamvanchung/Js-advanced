class friend{
    hello() {
        console.log('Hello every one');
    }
}
class myFriend extends friend{
    hello(cb) {
        console.log('hello truong');
        cb();
    }
}

const hi = new myFriend();
hi.hello(function () {
    console.log('Hi boss chung');
})
