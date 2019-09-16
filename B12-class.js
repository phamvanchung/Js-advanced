class mouse{
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} is running`);
        
    }
}
const Mouse = new mouse('donal');
console.log(Mouse.run());
