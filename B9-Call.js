function greeting() {
    console.log(`Hi, name:${this.name} 
    age:${this.age}`)
}

const friend = {
    name: 'truong',
    age: '20',
}
greeting.call(friend);