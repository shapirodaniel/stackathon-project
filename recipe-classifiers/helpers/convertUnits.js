/*
  individual ingredient processing gives two methods for ingredient input:
  1: no units, either uniform or bakers math
	2: a weight, units, ingredient name field form
*/

// dummy user input
const userInput =
	'100 ap flour 80 water (room-temp) 15 levain 2.5 soft butter (slightly chilled) 8 1-cm pearl sugar granules';

// convert non-gram weights to grams
// unit will be supplied by the select value on the local state of the recipe input form
const convertWeightToGrams = (weight, unit) => {
	if (unit === 'gram') return Math.round(weight);
	if (unit === 'ounce') return Math.round(weight * 28.3495);
	if (unit === 'pound') return Math.round(weight * 16 * 28.3495);
};

// if mixed imperial units, weights is: { pound: num, ounce: num }
const convertMixedImperial = weights => {
	return (
		convertWeightToGrams(weights.pound, 'pound') +
		convertWeightToGrams(weights.ounce, 'ounce') +
		' grams'
	);
};

// when unit conversions are done, remove the 'grams' placeholder
const removeUnits = input => {
	return input.match(/gram\s/gi, match => '');
};

module.exports = { convertWeightToGrams, convertMixedImperial, removeUnits };
