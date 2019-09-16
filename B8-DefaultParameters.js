function greeting(name='friend',language='en') {
    if (language === 'en') {
        return `Hi,${name}`
    }
    if (language === 'ja') {
        return `kimochi,${name}`;
    }
    else
        return 'hello every one';
}
console.log(greeting('chung', 'en'));