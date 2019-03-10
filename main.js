const nameModule = require('./names');
const bracketGen = require('./bracket-gen');
const fs = require('fs');

const names = nameModule.names;
const generateBracket = bracketGen.generateBracket;

// Get our brackets
const brackets = generateBracket(names);

//Print to md format
_printContents(brackets);


function _printContents(brackets) {
	// Sort output
	const outputFile = 'output.md';
	fs.truncate(outputFile, 0, ()=>{ console.log('truncated file')});

	const stream = fs.createWriteStream(outputFile);

	stream.write('# Bracket Results\n');
	stream.write('## Bracket: Seed\n');
	for (var key in brackets) {
		stream.write('### ' + key +'\n');
		stream.write('* West: ' + brackets[key]['west']+'\n');
		stream.write('* East: ' + brackets[key]['east']+'\n');
		stream.write('* South: ' + brackets[key]['south']+'\n');
		stream.write('* Mid-West: ' + brackets[key]['midWest']+'\n');
	}

	stream.end();
	console.log('Bracket Generated');

};