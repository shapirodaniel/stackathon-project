//////////////////////////////
/* ---- yeast motility ---- */
//////////////////////////////

// yeast motility tracks how easy it will be for yeast to get to food sources
// directly affected by the presence of desiccants, whole grain, sweeteners -- especially glucose-based dry sweeteners, to a lesser extent fructose/maltose sweeteners, which are generally syrups

const yeastMotilityFactors = new Set([
	'dry sweetener',
	'syrup',
	'salt',
	'seed',
	'nut',
	'dried fruit',
	'dried produce',
	'whole grain',
	'rye',
	'levain',
	'poolish',
	'sponge',
	'tangzhong',
	'yudane',
	'biga',
]);

// yeast motility depends on the following factors:
// hydration: this is a synthetic category -- divide sum of liquids by totalFlour and assign a hydration score
// sweetener lowers yeastMotility
// salt lowers yeastMotility
// inclusions will generally lower yeastMotility
// preferments -- most will slightly raise yeast motility, biga lowers it at significant bp's, like the canonical ciabatta
const getYeastMotilityImpact = ingredientClass => {
	switch (ingredientClass) {
		// impact of hydration is +2 so we put desiccants and other hygroscopic ingredients at -2
		case 'dry sweetener':
			return -2;
		case 'syrup':
			return -0.5;
		case 'salt':
			return -2;
		case 'seed' || 'nut' || 'dried fruit' || 'dried produce':
			return -2;
		case 'whole grain' || 'rye':
			return -1;
		case 'levain' || 'poolish' || 'sponge' || 'tangzhong' || 'yudane':
			return 0.2;
		case 'biga':
			return -0.2;
		default:
			return 0;
	}
};

module.exports = { yeastMotilityFactors, getYeastMotilityImpact };
