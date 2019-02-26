const mendeleevTable = require('@chemistry/elements').ChemElements;

const getChemistryElementBySymbol = (symbol) => {
    let element = mendeleevTable.getBySymbol(symbol);
    return element ? {
        name: element.name,
        number: element.id,
        weight: element.mass
    } : null;
}

module.exports = getChemistryElementBySymbol;

console.log(getChemistryElementBySymbol('I'));