

/**
@function -- generates a 'stupid' bracket for 16 names, consisting of one seed per player per region
@names -- an array of 16 strings, each containing a name of a stupid bracket player
*/
function generateBracket (names) {
	let results = {};
	let regions = ['west','south','east','midWest'];

	// convert array of names into object with pre-populated regions
	names.forEach(name=>{
		results[name] = {
			west: null,
			south: null,
			east: null,
			midWest: null,
		};
	});
	
	// for each region, generate a seed
	regions.forEach(region=>{
		_generateRegionBracket(results, region);
	});

	return results;
  
};

/**
@function generates a bracket for a given regeion
@params nameBrackets object of objects with associated seeds
*/
function _generateRegionBracket(nameBrackets, region) {
	let bracketSeeds = _generateSeeds();
	let seed;

	for (var key in nameBrackets) {
		seed = bracketSeeds.shift();
		nameBrackets[key][region] = seed;
	}
};

/**
@function returns a randomized array of numbers 1-16
@ Explanation -- uses Durstenfeld Shuffle
*/
function _generateSeeds() {
	let seeds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	for (let i = 15; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [seeds[i], seeds[j]] = [seeds[j], seeds[i]];
    }

	return seeds;
}

module.exports = {
	'generateBracket': generateBracket
};

