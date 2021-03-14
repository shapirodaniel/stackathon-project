///////////////////////////////////
/* ---- yeast concentration ---- */
///////////////////////////////////

// yeast concentration tracks how much yeast will be present in the dough
// directly affected by amount of yeast used and preferments and their initial starter bp's

// yeast concentration depends on the following factors:
// yeast -- more yeast raises yeast concentration
// preferments -- more preferments raises yeast concentration
const getYeastConcentrationFactors = new Set([
	'yeast',
	'levain',
	'poolish',
	'sponge',
	'biga',
]);

const getYeastConcentrationImpact = ingredientClass => {
	switch (ingredientClass) {
		case 'yeast':
			return 2;
		case 'levain' || 'poolish' || 'sponge' || 'biga':
			return 1.5;
		default:
			return 0;
	}
};

module.exports = { getYeastConcentrationFactors, getYeastConcentrationImpact };
