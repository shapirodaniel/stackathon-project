const { canonicalScores } = require('./canonicals');
const { getScores, getClassifiedRecipe } = require('./compareRecipes');

const getUserScores = userInput => {
	return getScores(getClassifiedRecipe(userInput));
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
	for (recipe in canonicalScores) {
		const userScores = getUserScores(userRecipe);
		const percentDifference = getPercentDifference(
			userScores,
			canonicalScores[recipe]
		);

		console.log(userScores, percentDifference);

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
	return console.log(
		`closest matched recipe is ${closestMatch}:`,
		require('./canonicals')[closestMatch]
	);
};

// tests work!
const dummyBaguette =
	'100 flour 80 water 12 levain 5 poolish 2.25 salt .33 yeast';
findClosestMatch(dummyBaguette); // returns wholeWheat

const dummyBrioche =
	'50 ap flour 50 bread flour 35 milk 40 butter 10 sugar 3 fresh yeast 4 salt 12 whole egg';
findClosestMatch(dummyBrioche);

const dummyRye = '50 bread flour 10 ap 40 rye 80 water 15 levain 2.2 salt';
findClosestMatch(dummyRye);

const dummyBagel =
	'100 flour 45 water 30 poolish 7 diastatic malt 8 sugar 3 salt 2 yeast';
findClosestMatch(dummyBagel);

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

module.exports = { findClosestMatch };
