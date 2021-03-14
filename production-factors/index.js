// require score constants and funcs in for getScore() method
const { pHFactors, getpHImpact } = require('./pH');

const {
	yeastMotilityFactors,
	getYeastMotilityImpact,
} = require('./yeastMotility');

const {
	yeastConcentrationFactors,
	getYeastConcentrationImpact,
} = require('./yeastConcentration');

// getScore() takes in a baker's math-converted recipe obj, a factor set, and a getImpact() method and returns a total impact score for a particular production factor
const getScore = (convertedRecipe, factorsSet, getImpact) => {
	// total score
	let total = 0;

	// loop through ingredient classes and sum subclass scores
	for (ingredientClass in convertedRecipe) {
		// if ingredient class affects factor...
		if (factorsSet.has(ingredientClass)) {
			// ... add the sum of it's factor-relevant scores to total
			total += convertedRecipe[ingredientClass].reduce(
				(sum, ingredient) => {
					// if there are subclasses, return the sum of their scores, else return 0
					return sum + ingredient.subclasses.length
						? ingredient.subclasses
								.map(subclass => getImpact(subclass))
								.reduce((a, b) => a + b, 0)
						: 0;
				},
				0
			);
		}
	}
};

// return an object with pH, yeastMotility, and yeastConcentration scores
const getScores = convertedRecipe => {
	return {
		pH: getScore(convertedRecipe, pHFactors, getpHImpact),
		yeastMotility: getScore(
			convertedRecipe,
			yeastMotilityFactors,
			getYeastMotilityImpact
		),
		yeastConcentration: getScore(
			convertedRecipe,
			yeastConcentrationFactors,
			getYeastConcentrationImpact
		),
	};
};

module.exports = { getScores };
