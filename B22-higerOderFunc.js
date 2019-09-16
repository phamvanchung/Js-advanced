function waitAndRun(ms,func) {
    setTimeout(func, ms);
}
function run() {
    console.log('run');
}
waitAndRun(2000, run);