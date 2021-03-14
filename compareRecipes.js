// next compare user recipe to canonicals
// require the canonicals and sub-classifiers
const canonicals = require('../canonicalRecipes');
const { getClassifiedRecipe } = require('./recipe-classifiers');
const { getScores } = require('./production-factors');

// getHydration() takes in a recipe and returns the recipe hydration
const getHydration = recipe => {
	const getSum = type => recipe[type].reduce((sum, { bp }) => sum + bp, 0);
	const totalFlour = getSum('flour');
	const totalLiquid = getSum('liquid');
	return ((totalLiquid / totalFlour) * 100).toFixed(2);
};

// getRecipeDiff() takes in two objs { pH, yeastMotility, yeastConcentration }, combines their scores, and returns a single totalDiff object
const getRecipeDiff = (userInput, canonical) => {
	// get post-classification scores for both recipes
	const userScores = getScores(getClassifiedRecipe(userInput));
	const canonicalScores = getScores(getClassifiedRecipe(canonical));
	// copy the canonical scores and subtract each user score
	const totalDiff = { ...canonicalScores };
	for (score of totalDiff) totalDiff[score] -= userScores[score];

	// get the hydrationDiff and add it to yeastMotility
	const hydrationDiff =
		(getHydration(canonical) - getHydration(userInput)) * 2;
	totalDiff.yeastMotility += hydrationDiff;

	// return { pH, yeastMotility, yeastConcentration }
	return totalDiff;
};

// use recipe diff to inform the production optimizer!
// no idea how that works, yet, but we have the ability
// :D

module.exports = { getRecipeDiff };
