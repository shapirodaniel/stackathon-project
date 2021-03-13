const natural = require('natural');

// the ingredientClassifier can be serialized and stored in db
const ingredientClassifier = new natural.BayesClassifier();

// train the classifier to recognize the main classes affecting production schedule outcomes -- these are the generic recipe template fields
/*
  const generic = {
    flour: [{}],
    dries: [{}],
    liquid: [{}],
    salt: [{}],
    yeast: [{}],
    sweetener: [{}],
    egg: [{}],
    dairy: [{}],
    preferment: [{}],
    inclusion: [{}],
  };
*/

// some of these fields will be independent variables in the model -- these are the ingredientClasses that don't affect fermentation in important ways, since we can assume any recipe that deviates significantly from the canonical recipe will move "toward" another canonical recipe -- this will allow us to avoid the trap of overspecifying the model -- eg, we don't need to know the effect adding butter will have to a country sourdough, since it won't speed-up/slow-down fermentation -- the strength of the dough will be assumed to be a constant outcome, ie we will assume skilled production labor that can develop dough strength in the given production window -- and if we do modify enough ingredientClasses in a recipe, it will most likely "move" into alignment with another canonical model

// if there is a recipe that "falls through the cracks" -- one that doesn't align to any significant degree with any existing canonical model -- this is an edge case that will be handled in later project iterations -- these would be good candidates for a user prompt to explore bringing the recipe into alignment with known models, or better yet, bring up a list of recipe classifications and ask the user to CHOOSE which one this recipe aligns with! then, we can define "adjacent" recipeClasses that are user-determined: say a user says, "this dinner roll is basically a brioche" but it doesn't contain any eggs -- a good use case would be for vegan breads or gluten-free breads -- we could create a set of "brioche-like" breads that are able to be classified as brioche, but use a submodel derived from this "x-like" set. the submodel will produce a production schedule that's potentially significantly removed from the canonical model's production schedule; this allows us to "have our cake and eat it too" by classifying breads according to what users say the classifications mean to them, but still allowing us to logically group and generate production schedules by recipeClass

// get an ingredient list from user input
const myIngredientList = [
	{ flour: 100 },
	{ water: 80 },
	{ levain: 15 },
	{ salt: 2.5 },
];

/*
  take in a list of ingredient entries structured:

  [{...ingredient}, ...]

  and output a classifiedRecipe structured:

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
	return ingredients.reduce((ingredient, classifiedRecipe) => {
		// get ingredient name
		const [name] = Object.keys(ingredient);

		// get ingredient class from name
		const ingredientClass = ingredientClassifier.classify(name);

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

// next we'll get the classifications for a classifiedRecipe and create a vector for each ingredientClass, and use it to quantify the effect of deviation from the canonical model
