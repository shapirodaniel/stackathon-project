const getRecipeString = recipe => {
	let res = '';
	for (ingredientClass in recipe) {
		const ingredients = recipe[ingredientClass];
		res += ingredients
			.map(ingredient => `${ingredient.bp} ${ingredient.name} `)
			.join('');
	}
	return res.trim();
};

const { multigrain, painDeMie, brioche } = require('./recipes/breads');
console.log(
	getRecipeString(multigrain),
	getRecipeString(painDeMie),
	getRecipeString(brioche)
);

module.exports = { getRecipeString };
