// require the getIngredientList helper that converts
// user input to array of weights: number and names: string
const { getIngredientList } = require('./helpers');

// require the ingredientClassifier and sub-classifiers
const ingredientClassifier = require('./ingredientClassifier');

const { getIngredientSubclass } = require('./sub-classifiers');

/*
  classifyRecipe() takes in a list of ingredient objs structured:

  [{...ingredient}, ...]

  and outputs a classifiedRecipe structured:

  myClassifiedRecipe: {
    ingredientClass: [{...classifiedIngredient}, ...]
    ...
  }
*/

const classifyRecipe = ingredientList => {
	// reduce ingredients list to generated classifiedRecipe
	// an object that has the generic template categories
	// each is a list containing ingredient objs that correspond
	// to the class
	return ingredientList.reduce((classifiedRecipe, ingredient) => {
		// get ingredient name
		const [name] = Object.keys(ingredient);

		// get ingredient class from name
		const ingredientClass = ingredientClassifier.classify(name);

		// sub-class as necessary with a getIngredientSubclass helper
		// sub-classes only affect their parent class (this simplifies the model that quantifies deviation effects)
		// getIngredientSubclass() returns an array of subclasses
		const subclass = getIngredientSubclass(ingredient, ingredientClass);

		!ingredient.subclasses
			? (ingredient.subclasses = [subclass])
			: ingredient.subclasses.push(subclass);

		// either add the ingredient to the class array on the classifiedRecipe object or, if the class doesn't yet exist, add a new key with a value of [ {...ingredient} ]
		classifiedRecipe[ingredientClass]
			? classifiedRecipe[ingredientClass].push(ingredient)
			: (classifiedRecipe[ingredientClass] = [ingredient]);

		return classifiedRecipe;
	}, {});
};

////////////////////////////////////////////////////////////////
/* ---- convert to baker's math after classifying recipe ---- */
////////////////////////////////////////////////////////////////

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

			// baker's percentage is a fixed-decimal number (cast to number with leading + )
			const bp = +((ingredient[name] / totalFlour) * 100).toFixed(2);

			// the new ingredient object
			return { name: name, bp: bp, subclasses: ingredient.subclasses };
		});

		// replace the clasifiedRecipe value with the new list
		classifiedRecipe[ingredientClass] = bpConvertedList;
	}
	return classifiedRecipe;
};

const getClassifiedRecipe = ingredientList =>
	convertToBakersMath(classifyRecipe(ingredientList));

module.exports = { getClassifiedRecipe };
