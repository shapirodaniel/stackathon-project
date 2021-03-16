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

// salt does *not* affect pH! (for our purposes)

const pHClasses = new Set(['flour', 'dairy', 'inclusion']);

const pHSubclasses = new Set([
	'whole grain',
	'rye',
	'dried fruit',
	'dried produce',
	'seed',
	'nut',
]);

// return the pH impact of an ingredient class or subclass
const getpHImpact = ingredientClass => {
	switch (ingredientClass) {
		case 'rye':
			return 3;
		case 'whole grain':
			return 2;
		case 'hi extraction':
			return 1.5;
		case 'dairy':
			return 0.25;
		case 'dried fruit' || 'dried produce':
			return 1.5;
		case 'seed' || 'nut':
			return 0.75;
		default:
			return 1;
	}
};

module.exports = { pHClasses, pHSubclasses, getpHImpact };
