//////////////////////////////
/* ---- yeast motility ---- */
//////////////////////////////

// yeast motility tracks how easy it will be for yeast to get to food sources
// directly affected by the presence of desiccants, whole grain, sweeteners -- especially glucose-based dry sweeteners, to a lesser extent fructose/maltose sweeteners, which are generally syrups

const yeastMotilityClasses = new Set([
	'sweetener',
	'salt',
	'flour',
	'preferment',
	'inclusion',
]);

const yeastMotilitySubclasses = new Set([
	'dry sweetener',
	'syrup',
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
			return 0.25;
		case 'syrup':
			return 0.5;
		case 'salt':
			return 0.25;
		case 'seed' || 'nut' || 'dried fruit' || 'dried produce':
			return 0.25;
		case 'whole grain' || 'rye':
			return 0.5;
		case 'levain' || 'poolish' || 'sponge' || 'tangzhong' || 'yudane':
			return 1.5;
		case 'biga':
			return 0.75;
		default:
			return 1;
	}
};

module.exports = {
	yeastMotilityClasses,
	yeastMotilitySubclasses,
	getYeastMotilityImpact,
};
