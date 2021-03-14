//////////////////
/* ---- pH ---- */
//////////////////

// pH is a ten-fold measurement of H+ concentration
// we ignore pH effects until the projected initial pH > 7 || < 4.5
// > 7 === many basic additions, probably too much dairy and basic inclusions
// < 4.5 === many acidic additions, probably too much whole grain (particularly rye), too much preferment, or added alcohol like a spent-grain bread + beer

// pH depends on the following factors:
// flour ingredientClasses and extraction (where specified) lowers pH
// dairy raises pH
// dried fruit/produce inclusions lower pH
// dried seed/nut inclusions raise pH

// ingredients that affect pH
const pHFactors = new Set([
	'whole grain',
	'rye',
	'dairy',
	'dried fruit',
	'dried produce',
	'seed',
	'nut',
]);

// return the pH impact of an ingredient class
const getpHImpact = ingredientClass => {
	switch (ingredientClass) {
		case 'rye':
			return 2;
		case 'whole grain':
			return 1;
		case 'hi extraction':
			return 1;
		case 'dairy':
			return -0.5;
		case 'dried fruit':
			return 0.5;
		default:
			return 0;
	}
};

module.exports = { pHFactors, getpHImpact };
