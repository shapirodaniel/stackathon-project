// the idea:

/*
  individual ingredient processing

  give two methods for ingredient input

  1: no units, either uniform or bakers math

	2: a weight, units, ingredient name field form

	(2 is less cool looking but way more practical than all the hoop jumping i'm currently doing with parsing compound imperial recipes and doing conversions etc. -- this way the user is responsible for just inputting the data in a more manageable form for me to work with, not much of a tradeoff)
*/

// dummy user input
const userInput =
	'100 ap flour 80 water (room-temp) 15 levain 2.5 soft butter (slightly chilled) 8 1-cm pearl sugar granules';

// convert non-gram weights to grams
// unit will be supplied by the select value
// on the local state of the recipe input form
const convertWeightToGrams = (weight, unit) => {
	if (unit === 'gram') return Math.round(weight);
	if (unit === 'ounce') return Math.round(weight * 28.3495);
	if (unit === 'pound') return Math.round(weight * 16 * 28.3495);
};

// if mixed imperial units, weights is: [ lbs: num, ozs: num ]
const convertMixedImperial = weights => {
	return (
		convertWeightToGrams(weights[0], 'pound') +
		convertWeightToGrams(weights[1], 'ounce')
	);
};

// when unit conversions are done, remove the 'grams' placeholder
const removeUnits = input => {
	return input.match(/gram\s/gi, match => '');
};

// the above conversions will be done before input is reassembled for getIngredients, so the input string will always be structured: '100 flour 80 water 15 levain 2.5 salt ...'

const getIngredients = input => {
	let tokens = input.split(' ').map(token => {
		if (isNaN(Number(token))) return token;
		return Number(token);
	});

	let restOfRecipeIdx = 2,
		ingredientsList = [];

	while (tokens.length) {
		let weight = tokens[0],
			name = tokens[1];

		while (typeof tokens[restOfRecipeIdx] === 'string') {
			name += ' ' + tokens[restOfRecipeIdx];
			restOfRecipeIdx++;
		}

		let entry = {};
		entry[name] = weight;
		tokens = tokens.slice(restOfRecipeIdx);
		restOfRecipeIdx = 2;
		ingredientsList.push(entry);
	}

	return ingredientsList;
};
const ingredients = getIngredients(userInput);
console.log(ingredients);

// and each ingredient object key should be stemmed and added to a recipeClass list

let recipeClasses = [];
const ingredientNames = ingredients.map(
	ingredient => Object.keys(ingredient)[0]
);
const getRecipeClasses = ingredientNames => {
	// here we get class names for each ingredient
	// so that we can categorize them and evaluate
	// each of their edit distances
	// to make predictions about how far off they are
	// from canonical proportions in their weights
};
