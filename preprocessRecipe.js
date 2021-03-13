const getIngredients = input => {
	let tokens = input.split(' ').map(token => {
		if (isNaN(Number(token))) return token;
		return Number(token);
	});

	let restOfRecipeIdx = 2,
		ingredientsList = [];

	while (tokens.length) {
		let weight = tokens[0],
			name = tokens[1];

		while (typeof tokens[restOfRecipeIdx] === 'string') {
			name += ' ' + tokens[restOfRecipeIdx];
			restOfRecipeIdx++;
		}

		let entry = {};
		entry[name] = weight;
		tokens = tokens.slice(restOfRecipeIdx);
		restOfRecipeIdx = 2;
		ingredientsList.push(entry);
	}

	return ingredientsList;
};
const ingredients = getIngredients(userInput);

module.exports = { getIngredients };
