const fs = require('fs');

// Print Contents to readMe
function printBrackets(brackets, sortedNames) {
	// Sort output
	const outputFile = 'output.md';
	fs.truncate(outputFile, 0, ()=>{ console.log('truncated file')});

	const stream = fs.createWriteStream(outputFile);

	stream.write('#Bracket Results\n');
	stream.write('## Bracket: Seed\n');
	sortedNames.forEach(name => {
		stream.write('### ' + name +'\n');
		stream.write('* West: ' + brackets[name]['west']+'\n');
		stream.write('* East: ' + brackets[name]['east']+'\n');
		stream.write('* South: ' + brackets[name]['south']+'\n');
		stream.write('* Mid-West: ' + brackets[name]['midWest']+'\n');
	})

	stream.end();
	

};

module.exports = {
	'printBrackets': printBrackets
};