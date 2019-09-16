function friend(name) {
    return function (str) {
        console.log(`[${name}] ${str}`);
    }
}
const log = friend('truong');
log('happy new year');