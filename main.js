const { getIngredientList } = require('./recipe-classifiers/helpers');
const { getClassifiedRecipe } = require('./recipe-classifiers');
const { getRecipeDiff } = require('./compareRecipes');

// close recipes
const userRecipe =
	'50 bread flour 15 ap flour 25 whole wheat flour 10 rye flour 85 water 20 levain 2 salt';
const canonicalRecipe =
	'35 bread flour 30 ap flour 25 whole wheat flour 10 rye flour 80 water 15 levain 2.5 salt';

const userIngredientList = getIngredientList(userRecipe);
const canonicalIngredientList = getIngredientList(canonicalRecipe);
// console.log('userIngredientList:\n', userIngredientList);
// console.log('canonicalIngredientList:\n', canonicalIngredientList);

const userClassifiedRecipe = getClassifiedRecipe(userIngredientList);
const canonicalClassifiedRecipe = getClassifiedRecipe(canonicalIngredientList);

// console.log('userClassifiedRecipe:\n', userClassifiedRecipe);
// console.log('canonicalClassifiedRecipe:\n', canonicalClassifiedRecipe);

const diff = getRecipeDiff(userIngredientList, canonicalIngredientList);
console.log('diff:\n', diff);

// far apart recipes
const user2 =
	'250 bread flour 150 ww 100 rye 400 water 75 levain 15 poolish 13 salt 4 fresh yeast';
const canonical2 =
	'60 bread flour 20 ap flour 15 ww 5 rye 88 water 10 levain 10 poolish 2.5 salt .33 fresh yeast';
const diff2 = getRecipeDiff(
	getIngredientList(user2),
	getIngredientList(canonical2)
);
console.log('diff2:\n', diff2);
/*
	diff2:
	{
		pH: 0,
		yeastMotility: -25.975000000000023,
		yeastConcentration: -0.5899999999999999
	}
*/

// identical recipes
const ident = '100 flour 80 water 2.5 salt 1 yeast';
const diffIdent = getRecipeDiff(
	getIngredientList(ident),
	getIngredientList(ident)
);
console.log('diffIdent:\n', diffIdent);
/*
	diffIdent:
	{ pH: 0, yeastMotility: 0, yeastConcentration: 0 }
*/
