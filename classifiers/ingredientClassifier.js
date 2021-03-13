const natural = require('natural');

// define a bayesian classifier for ingredients
const ingredientClassifier = new natural.BayesClassifier();

// train the classifier to recognize the main classes affecting production schedule outcomes (most of the generic canonical recipe template fields):
// flour, liquid, yeast, sweetener, egg, inclusion -- ex.,

const corpii = {
	flourCorpus, // each an obj: { flour: flourCorpus }
	liquidCorpus,
	yeastCorpus,
	sweetenerCorpus,
	eggCorpus,
	inclusionCorpus,
};

for (corpus of corpii) {
	const ingredientClass = Object.keys(corpus)[0];
	ingredientClassifier.addDocument(corpus[ingredientClass], ingredientClass);
}

// after calling getIngredients(userInput), myIngredientsList is a list of objs structured:
// [{ name: weight }, ...]
const myIngredientList = [
	{ 'bread flour': 35 },
	{ 'ap flour': 30 },
	{ 'whole wheat flour': 25 },
	{ 'rye flour': 10 },
	{ water: 80 },
	{ levain: 15 },
	{ salt: 2.5 },
];

/*
  classifyRecipe() takes in a list of ingredient objs structured:

  [{...ingredient}, ...]

  and outputs a classifiedRecipe structured:

  myClassifiedRecipe: {
    ingredientClass: [{...classifiedIngredient}, ...]
    ...
  }
*/
const classifyRecipe = ingredients => {
	// reduce ingredients list to generated classifiedRecipe
	// an object that has the generic template categories
	// each is a list containing ingredient objs that correspond
	// to the class
	return ingredients.reduce((classifiedRecipe, ingredient) => {
		// get ingredient name
		const [name] = Object.keys(ingredient);

		// get ingredient class from name
		const ingredientClass = ingredientClassifier.classify(name);

		// sub-class as necessary with a subclass helper

		// either add the ingredient to the class array on the classifiedRecipe object or, if the class doesn't yet exist, add a new key with a value of [ {...ingredient} ]
		classifiedRecipe[ingredientClass]
			? classifiedRecipe[ingredientClass].push(ingredient)
			: (classifiedRecipe[ingredientClass] = [ingredient]);

		return classifiedRecipe;
	}, {});
};

const myClassifiedRecipe = classifyRecipe(myIngredientList);

// next we'll find the canonical model that matches myClassifiedRecipe
// this will be a multi-pronged step:

// first match by absence/presence of ingredientClasses: ex., this will allow us to discard all the enriched doughs if the user recipe doesn't contain any ingredients that classify as egg/dairy

// after sifting canonical models to arrive at a few candidates, measure the edit distance of ingredient names from canonical ingredient names and select the model that minimizes edit distance

// next we'll need to more finely sift ingredients by sub-classifying them to get "scores" that will affect the big quantification metrics for an ingredientClass -- for example, flours should be roughly classified as white or whole grain, and whole grain should be divided into wheats and ryes

// require the sub-classifiers
const {
	flourClassifier,
	liquidClassifier,
	yeastClassifier,
	eggClassifier,
	sweetenerClassifier,
	inclusionClassifier,
} = require('./subClassifiers');

const getIngredientSubclass = (ingredient, ingredientClass) => {
	// train sub-classifiers for each ingredientClass, then switch on ingredientClass and get the sub-class for each ingredient

	const { name } = ingredient;

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

// do the minimal amount of sifting necessary to be able to quantify the overall affect of having more or less of one kind of flour than the canonical model specifies -- for instance, we should expect a country sour that swaps the proportions of wheat and rye to ferment a good deal faster, so we should be able to quantify the effect of having more rye than the canonical model at each of the "dough at rest" stages (the fermentation stages)

// define sub-classifiers and get the metric for each ingredientClass as a sum of the weighted scores of all sub-classified ingredients, where a weighted score is:

/*

  ex., flours: [{name: 'bread', weight: 100}]


*/
