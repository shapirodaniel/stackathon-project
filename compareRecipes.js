// next compare user recipe to canonicals
// require the canonicals and sub-classifiers
const canonicals = require('./canonicals/recipes');
const { getClassifiedRecipe } = require('./recipe-classifiers');
const { getScores } = require('./production-factors');

// do a rough match on ingredient classes and subclasses by length
// if that doesn't return 1-2 results, check edit distance of ingredients

const findCanonicalMatch = userInput => {
	// select a canonical recipe
	// how to do this?
	// compare ingredient class total bp first
	// most recipes will have flour, water, salt, yeast
	// so we can discard based on the remaining ingredient classes
	// that will narrow the choices
	// return the narrowed choices as array to user to select
	// in react, map these to a button dialogue:
	/*
	return (
		<div>
			<div>Which recipe matches yours best?</div>
			canonicalMatches.map(recipe =>
				(
					<button
						type='button'
						onClick={chooseRecipe()}
					>{recipe.name}</button>
				)
			);
		</div>
	);
	*/
};

// getRecipeDiff() takes in two objs { pH, yeastMotility, yeastConcentration }, combines their scores, and returns a single totalDiff object
const getRecipeDiff = (userInput, canonical) => {
	// get post-classification scores for both recipes
	const userScores = getScores(getClassifiedRecipe(userInput));
	const canonicalScores = getScores(getClassifiedRecipe(canonical));
	// copy the canonical scores and subtract each user score
	const totalDiff = { ...canonicalScores };
	for (score of totalDiff) totalDiff[score] -= userScores[score];

	// return { pH, yeastMotility, yeastConcentration }
	return totalDiff;
};

// use recipe diff to inform the production optimizer!
// no idea how that works, yet, but we have the ability
// :D

module.exports = { getRecipeDiff };
