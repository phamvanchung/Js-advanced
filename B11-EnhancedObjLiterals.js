const name = 'tom';
const cat = {
    name,
    run() {
        console.log(`${this.name} is running`);
    }
}
console.log(cat.run());
