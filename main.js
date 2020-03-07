const { names } = require('./names'),
	{ generateBracket } = require('./bracket-gen'),
	{ sortNames } = require('./sortNames'),
	{ printBrackets } = require('./printBrackets');

// Generate brackets and sorted Names for printing
const brackets = generateBracket(names);
const sortedNames = sortNames(names);

// Print to md format
printBrackets(brackets, sortedNames);
console.log('Bracket Generated');
