// next compare user recipe to canonicals
// require the canonicals and sub-classifiers
const canonicals = require('../canonicalRecipes');
const { getClassifiedRecipe } = require('./recipe-classifiers');
const { getScores } = require('./production-factors');

// getRecipeDiff() takes in two objs { pH, yeastMotility, yeastConcentration },
// combines their scores, and returns a single totalDiff object
const getRecipeDiff = (userInput, canonical) => {
	const userScores = getScores(getClassifiedRecipe(userInput));
	const canonicalScores = getScores(getClassifiedRecipe(canonical));
	const totalDiff = { ...canonicalScores };
	for (score of totalDiff) totalDiff[score] -= userScores[score];
	return totalDiff;
};

// use recipe diff to inform the production optimizer!
// no idea how that works, yet, but we have the ability
// :D

module.exports = { getRecipeDiff };
