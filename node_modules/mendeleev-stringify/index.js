const elementInfo = require('mendeleev');

function mendeleevStringify(symbol){
    let element = elementInfo(symbol);
    return element ? `${element.number}. ${element.name} / ${element.weight}` : null;
}

module.exports = mendeleevStringify;

console.log(mendeleevStringify('I'));