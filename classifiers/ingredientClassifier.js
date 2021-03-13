/////////////////////////////////
/* ---- SET UP CLASSIFIER ---- */
/////////////////////////////////

// require the main library
const natural = require('natural');

// define a bayesian classifier for ingredients
const ingredientClassifier = new natural.BayesClassifier();

// require the corpuses that will be used to train the classifier
const corpii = require('../training-data');

// train the classifier
// addDocument() takes a corpus: array of strings, and a class: string
for (corpus of corpii) {
	// get the class from the corpus key
	const ingredientClass = Object.keys(corpus)[0];

	// add the corpus's training data to the classifier
	ingredientClassifier.addDocument(corpus[ingredientClass], ingredientClass);
}
// train the classifier
ingredientClassifier.train();

// after calling getIngredients(userInput), myIngredientsList is a list of objs structured: [{ name: weight }, ...]
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

// next, we'll need to subclass any ingredient that has a corresponding sub-classifier -- start by requiring the sub-classifiers
const {
	flourClassifier,
	liquidClassifier,
	yeastClassifier,
	eggClassifier,
	sweetenerClassifier,
	inclusionClassifier,
	getIngredientSubclass,
} = require('./sub-classifiers');

// next, run the classifiedRecipe through the meat grinder

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

		// sub-class as necessary with a getIngredientSubclass helper
		// sub-classes only affect their parent class (this simplifies the model that quantifies deviation effects)
		// getIngredientSubclass() returns an array of subclasses
		const subclasses = getIngredientSubclass(ingredient, ingredientClass);

		// assign subclasses array to ingredient
		ingredient.subclasses = subclasses;

		// either add the ingredient to the class array on the classifiedRecipe object or, if the class doesn't yet exist, add a new key with a value of [ {...ingredient} ]
		classifiedRecipe[ingredientClass]
			? classifiedRecipe[ingredientClass].push(ingredient)
			: (classifiedRecipe[ingredientClass] = [ingredient]);

		return classifiedRecipe;
	}, {});
};
const myClassifiedRecipe = classifyRecipe(myIngredientList);

// first, convert weights to bp
const convertToBakersMath = classifiedRecipe => {
	// get total flour weight
	const totalFlour = classifiedRecipe.flour.reduce(
		(sum, ingredient) => sum + Object.values(ingredient)[0],
		0
	);

	// loop through the classifiedRecipe
	// mutate in place by replacing each ingredient object
	// { name: weight } -> { name: name, bp: bp }
	// assume all weights in grams (that conversion from other units has already taken place)
	for (ingredientClass in classifiedRecipe) {
		// assign the class array to listOfIngredients
		const listOfIngredients = classifiedRecipe[ingredientClass];

		// convert each ingredient weight to a baker's percentage
		const bpConvertedList = listOfIngredients.map(ingredient => {
			// ingredientClass is the object's key
			const name = Object.keys(ingredient)[0];

			// baker's percentage is a fixed-decimal number
			const bp = +((ingredient[name] / totalFlour) * 100).toFixed(2);

			// the new ingredient object
			return { name: name, bp: bp };
		});

		// replace the clasifiedRecipe value with the new list
		classifiedRecipe[ingredientClass] = bpConvertedList;
	}
	return classifiedRecipe;
};
const bpConvertedClassifiedRecipe = convertToBakersMath(myClassifiedRecipe);

//////////////////////////////////////////
/* ---- RECIPE CONVERSION COMPLETE ---- */
//////////////////////////////////////////

// next compare user recipe to canonicals
// require the canonicals and sub-classifiers
const canonicals = require('../canonicalRecipes');

// do the minimal amount of sifting necessary to be able to quantify the overall affect of having more or less of one kind of flour than the canonical model specifies -- for instance, we should expect a country sour that swaps the proportions of wheat and rye to ferment a good deal faster, so we should be able to quantify the effect of having more rye than the canonical model at each of the "dough at rest" stages (the fermentation stages)
