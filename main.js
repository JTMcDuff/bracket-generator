const nameModule = require('./names');
const bracketGen = require('./bracket-gen');

const names = nameModule.names;
const generateBracket = bracketGen.generateBracket;

generateBracket(names);