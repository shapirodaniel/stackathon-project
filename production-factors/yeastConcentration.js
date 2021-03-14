///////////////////////////////////
/* ---- yeast concentration ---- */
///////////////////////////////////

// yeast concentration tracks how much yeast will be present in the dough
// directly affected by amount of yeast used and preferments and their initial starter bp's

// yeast concentration depends on the following factors:
// yeast -- more yeast raises yeast concentration
// preferments -- more preferments raises yeast concentration
// sweeteners -- more sugar raises yeast concentration
const yeastConcentrationClasses = new Set(['yeast', 'preferment', 'sweetener']);

const yeastConcentrationSubclasses = new Set([
	'dry sweetener',
	'syrup',
	'levain',
	'poolish',
	'sponge',
	'biga',
]);

// return the yeast concentration impact of an ingredient class or subclass
const getYeastConcentrationImpact = ingredientClass => {
	switch (ingredientClass) {
		case 'yeast':
			return 3;
		case 'dry sweetener':
			return 1.75;
		case 'syrup':
			return 1.25;
		case 'levain' || 'poolish' || 'sponge' || 'biga':
			return 1.5;
		default:
			return 1;
	}
};

module.exports = {
	yeastConcentrationClasses,
	yeastConcentrationSubclasses,
	getYeastConcentrationImpact,
};
