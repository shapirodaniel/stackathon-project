const { getIngredientList } = require('./recipe-classifiers/helpers');
const { getClassifiedRecipe } = require('./recipe-classifiers');
const { getRecipeDiff } = require('./compareRecipes');

const userRecipe =
	'50 bread flour 15 ap flour 25 whole wheat flour 10 rye flour 85 water 20 levain 2 salt';
const canonicalRecipe =
	'35 bread flour 30 ap flour 25 whole wheat flour 10 rye flour 80 water 15 levain 2.5 salt';

const userIngredientList = getIngredientList(userRecipe);
const canonicalIngredientList = getIngredientList(canonicalRecipe);
console.log('userIngredientList:\n', userIngredientList);
console.log('canonicalIngredientList:\n', canonicalIngredientList);

const userClassifiedRecipe = getClassifiedRecipe(userIngredientList);
const canonicalClassifiedRecipe = getClassifiedRecipe(canonicalIngredientList);

console.log('userClassifiedRecipe:\n', userClassifiedRecipe);
console.log('canonicalClassifiedRecipe:\n', canonicalClassifiedRecipe);
