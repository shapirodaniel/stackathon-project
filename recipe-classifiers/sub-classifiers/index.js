// each sub-classifier will be available at /api/classifiers/:ingredientClass
// ex., flours at /api/classifiers/flour

const eggClassifier = require('./egg');
const flourClassifier = require('./flour');
const inclusionClassifier = require('./inclusion');
const liquidClassifier = require('./liquid');
const sweetenerClassifier = require('./sweetener');
const yeastClassifier = require('./yeast');

// this helper takes in an ingredient obj and an ingredientClass string and outputs a sub-class string, ex.:
/*
	const ingredient = {name: rye, weight: 100}
	const ingredientClass = 'flour'

	const subclassedIngredient = getIngredientSubclass(ingredient, ingredientClass) // returns subclass 'rye'
*/
const getIngredientSubclass = (ingredient, ingredientClass) => {
	const name = Object.keys(ingredient)[0];

	switch (ingredientClass) {
		case 'flour':
			return flourClassifier.classify(name);

		case 'liquid':
			return liquidClassifier.classify(name);

		case 'yeast':
			return yeastClassifier.classify(name);

		case 'egg':
			return eggClassifier.classify(name);

		case 'sweetener':
			return sweetenerClassifier.classify(name);

		case 'inclusion':
			return inclusionClassifier.classify(name);

		// return empty string by default, which will allow us to ignore non-sub-classified ingredient effects later on, by only considering sub-classes with a length > 0
		default:
			return '';
	}
};

module.exports = {
	eggClassifier,
	flourClassifier,
	inclusionClassifier,
	liquidClassifier,
	sweetenerClassifier,
	yeastClassifier,
	getIngredientSubclass,
};
