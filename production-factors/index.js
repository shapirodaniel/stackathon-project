// require top-level set, subclass set, and
const { pHClasses, pHSubclasses, getpHImpact } = require('./pH');

const {
	yeastMotilityClasses,
	yeastMotilitySubclasses,
	getYeastMotilityImpact,
} = require('./yeastMotility');

const {
	yeastConcentrationClasses,
	yeastConcentrationSubclasses,
	getYeastConcentrationImpact,
} = require('./yeastConcentration');

// getScore() takes in a baker's math-converted recipe obj, a factor set, and a getImpact() method and returns a total impact score for a particular production factor
const getScore = (
	convertedRecipe,
	setOfTopLevelClasses,
	setOfSubclasses,
	getImpact
) => {
	// total score
	let total = 0;
	// loop through recipe's ingredient classes
	for (ingredientClass in convertedRecipe) {
		// if ingredient class affects the factor at-hand ...
		if (setOfTopLevelClasses.has(ingredientClass)) {
			// calculate the ingredient class's impact on the factor at-hand and add to total
			total += convertedRecipe[ingredientClass].reduce(
				(sum, ingredient) => {
					// here, we'll get an adjusted impact for score for the ingredientClass

					// first get ingredient bp
					const bp = ingredient.bp;

					// then get the top-level ingredient class impact
					// this allows us to quantify differences in "big" categories spread across multiple top-level classes
					// ex., we can compare hydration without having to calculate hydration, since its effects
					// will be quantified by/in the recipe's yeastMotility score!
					const topLevelClassImpact = getImpact(ingredientClass);

					// then get subclassImpact score, which is a non-negative scaling factor
					const subclassImpact = !ingredient.subclasses
						? 1
						: ingredient.subclasses.length
						? ingredient.subclasses
								.map(subclass =>
									setOfSubclasses.has(subclass)
										? getImpact(subclass)
										: 0
								)
								.reduce((a, b) => a + b, 0)
						: 1;

					// modulate the bp by its impact scores and return the sum + the modulated bp
					// both top-level and subclass impact score calculations return 1 if there's no effect
					// this allows us to normalize baker's percentages for top-level classes
					return sum + bp * topLevelClassImpact * subclassImpact;
				},
				0
			);
		}
	}
	return total;
};

// return an object with pH, yeastMotility, and yeastConcentration scores
const getScores = convertedRecipe => {
	return {
		pH: getScore(convertedRecipe, pHClasses, pHSubclasses, getpHImpact),
		yeastMotility: getScore(
			convertedRecipe,
			yeastMotilityClasses,
			yeastMotilitySubclasses,
			getYeastMotilityImpact
		),
		yeastConcentration: getScore(
			convertedRecipe,
			yeastConcentrationClasses,
			yeastConcentrationSubclasses,
			getYeastConcentrationImpact
		),
	};
};

module.exports = { getScores };
