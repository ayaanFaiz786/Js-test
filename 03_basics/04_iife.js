// Immediately invoked function expresssion

// to avoid globalscope pollution iffe is used
// iffe is funtion that is immediately executed
// this is named iffe
(function chai() {
    console.log('chai made');
})();

// this is simple iffe
((dbname) => {
    console.log(`${dbname} DB connected`);
})('production');