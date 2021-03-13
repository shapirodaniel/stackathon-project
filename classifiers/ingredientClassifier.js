const natural = require('natural');

// define a bayesian classifier for ingredients
const ingredientClassifier = new natural.BayesClassifier();

// require the corpuses that will be used to train the classifier
// flour, liquid, yeast, sweetener, egg, inclusion -- ex.,
const corpii = {
	flourCorpus, // each an obj: { flour: flourCorpus }
	liquidCorpus,
	yeastCorpus,
	sweetenerCorpus,
	eggCorpus,
	inclusionCorpus,
};

// train the classifier
// addDocument() takes a corpus: array of strings, and a class: string
for (corpus of corpii) {
	const ingredientClass = Object.keys(corpus)[0];
	ingredientClassifier.addDocument(corpus[ingredientClass], ingredientClass);
}
ingredientClassifier.train();

// the classifier can be saved for recall and further training
ingredientClassifier.save('ingredientClassifier.json', err => {
	if (err) return console.error(err);
});

// it can also be serialized/deserialized (if we need it)
const rawIngredientClassifier = JSON.stringify(ingredientClassifier);
const restoredIngredientClassifier = natural.BayesClassifier.restore(
	JSON.parse(rawIngredientClassifier)
);

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

// first, convert weights to bp
const convertToBakersMath = classifiedRecipe => {
	const totalFlour = classifiedRecipe.flour.reduce(
		(sum, ingredient) => sum + Object.values(ingredient)[0],
		0
	);

	// loop through classifiedRecipe's ingredient classes
	// mutate in place by replacing each ingredient object
	// { name: weight } with { name: name, bp: bp }
	// here, we need to be able to assume that unit conversion is done and all weights are in grams
	for (ingredientClass in classifiedRecipe) {
		const listOfIngredients = classifiedRecipe[ingredientClass];

		const bpConvertedList = listOfIngredients.map(ingredient => {
			const name = Object.keys(ingredient)[0];

			const bp = (ingredient[name] / totalFlour).toFixed(2);

			return { name: name, bp: bp };
		});

		classifiedRecipe[ingredientClass] = bpConvertedList;
	}

	return classifiedRecipe;
};
const bpConvertedClassifiedRecipe = convertToBakersMath(myClassifiedRecipe);

// second, match by absence/presence of ingredientClasses: ex., this will allow us to discard all the enriched doughs if the user recipe doesn't contain any ingredients that classify as egg/dairy
const canonicals = require('../canonicalRecipes');

// after sifting canonical models to arrive at a few candidates, measure the edit distance of ingredient names from canonical ingredient names and select the model that minimizes edit distance
const findCanonicalRecipeMatches = classifiedRecipe => {
	// assign a similarity score for each of the following steps:
	// step 1: see how many ingredients there are per class
	// step 2: compare ingredient bp's within the class
	// step 3: ???
	// step 4: profit -> return an array of matches and let the user decide if there isn't a statistically-significant choice, otherwise return a match
};

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
