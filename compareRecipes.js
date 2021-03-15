// next compare user recipe to canonicals
// require the canonicals and sub-classifiers
// const canonicals = require('./canonicals/');
const { getClassifiedRecipe } = require('./recipe-classifiers');
const { getScores } = require('./production-factors');

// getRecipeDiff() takes in two objs { pH, yeastMotility, yeastConcentration }, combines their scores, and returns a single totalDiff object
const getRecipeDiff = (userInput, canonical) => {
	// get post-classification scores for both recipes
	const userScores = getScores(getClassifiedRecipe(userInput));
	const canonicalScores = getScores(getClassifiedRecipe(canonical));
	// copy the canonical scores and subtract each user score
	const totalDiff = { ...canonicalScores };
	for (score in totalDiff)
		totalDiff[score] = userScores[score] - totalDiff[score];

	// return { pH, yeastMotility, yeastConcentration }
	return totalDiff;
};

// use recipe diff to inform the production optimizer!
// no idea how that works, yet, but we have the ability
// :D

module.exports = { getRecipeDiff, getScores, getClassifiedRecipe };
