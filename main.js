const chalk = require('chalk');
const { canonicalScores, getRecipeString, baguette } = require('./canonicals');
const { getScores, getClassifiedRecipe } = require('./compareRecipes');

const getUserScores = userInput => {
	return getScores(getClassifiedRecipe(userInput));
};

// utility func, will return a recipe string and scores
// used to test new canonical formulas
const getStringAndScores = recipe => {
	const recipeString = getRecipeString(recipe);
	const recipeScores = getUserScores(recipeString);
	return {
		string: recipeString,
		scores: recipeScores,
	};
};

const getPercentDifference = (a, b) => {
	const pH = +(Math.abs((a.pH - b.pH) / b.pH) * 100).toFixed(2);
	const yeastMotility = +(
		Math.abs((a.yeastMotility - b.yeastMotility) / b.yeastMotility) * 100
	).toFixed(2);
	const yeastConcentration = +(Math.abs((a.pH - b.pH) / b.pH) * 100).toFixed(
		2
	);
	return {
		pH: pH,
		yeastMotility: yeastMotility,
		yeastConcentration: yeastConcentration,
	};
};

const findClosestMatch = userRecipe => {
	let bestPercentDifference = {
			pHDiff: 100,
			yeastMotilityDiff: 100,
			yeastConcentrationDiff: 100,
		},
		bestSum = 300,
		closestMatch;

	// loop the canonical recipe scores
	// get the absolute percent difference
	// compare its sum to sum of best percent difference
	// if smaller replace bestPercentDifference and bestSum
	// and save recipe name as closestMatch for accessing
	let wasLogged;
	for (recipe in canonicalScores) {
		const userScores = getUserScores(userRecipe);

		// if (!wasLogged) console.log('userScores is: ', userScores);
		// wasLogged = true;

		const percentDifference = getPercentDifference(
			userScores,
			canonicalScores[recipe]
		);

		const currentSum = (() => {
			let res = 0;
			for (score in percentDifference) {
				res += percentDifference[score];
			}
			return res;
		})();

		if (currentSum < bestSum) {
			closestMatch = recipe;
			bestSum = currentSum;
			bestPercentDifference = percentDifference;
		}
	}

	// use the closestMatch to access the
	// best matched recipe on canonicals' module.exports
	const matchedRecipe = require('./canonicals')[closestMatch];
	// console.log(`closest matched recipe is ${closestMatch}`, matchedRecipe);
	return { name: closestMatch, recipe: matchedRecipe };
};

// tests work!
const dummyBaguette =
	'65 bread flour 30 ap flour 5 ww 82.5 water 25 levain 15 poolish 2.25 salt .75 yeast';
// console.log('dummy baguette > ');
findClosestMatch(dummyBaguette);

const dummyBrioche =
	'50 ap flour 50 bread flour 35 milk 40 butter 10 sugar 3 fresh yeast 4 salt 12 whole egg';
// console.log('dummy brioche > ');
findClosestMatch(dummyBrioche);

const dummyRye = '50 bread flour 10 ap 40 rye 80 water 15 levain 2.2 salt';
// console.log('dummy rye > ');
findClosestMatch(dummyRye);

const dummyBagel =
	'100 flour 45 water 30 poolish 7 diastatic malt 8 sugar 3 salt 2 yeast';
// console.log('dummy bagel > ');
findClosestMatch(dummyBagel);

let wasCleared;

const app = () => {
	if (!wasCleared) {
		console.clear();
		wasCleared = true;
	}

	process.stdout.write(
		`\n    hi! i'm a ${chalk.green('recipe classifier')}
		 \n    i accept recipe strings and return a likely match.
		 \n\nplease enter a recipe > `
	);

	process.stdin.on('readable', () => {
		const closestMatch = findClosestMatch(String(process.stdin.read()));
		const message = `\n${chalk.green(
			'match found!'
		)}\nyour recipe most closely resembles: ${chalk.green(
			closestMatch.name
		)}`;
		console.log(message, closestMatch.recipe);
	});
};

app();

module.exports = app;
