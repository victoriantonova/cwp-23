const fs = require('fs');
const stringify = require('mendeleev-stringify');

fs.readFile('elements.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    let elements = data.split('\n');
    elements.forEach(element => {
        console.log(stringify(element));
    });
});