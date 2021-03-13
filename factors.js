//////////////////
/* ---- pH ---- */
//////////////////

// pH is a ten-fold measurement of H+ concentration
// we ignore pH effects until the projected initial pH > 7 || < 4.5
// > 7 === many basic additions, probably too much dairy and basic inclusions
// < 4.5 === many acidic additions, probably too much whole grain (particularly rye), too much preferment, or added alcohol like a spent-grain bread + beer

// pH depends on the following factors:
// flour subclasses and extraction (where specified) lowers pH
// dairy raises pH
// dried fruit/produce inclusions lower pH
// dried seed/nut inclusions raise pH

const pH = (convertedRecipe, canonicalRecipe) => {
	// identify classes/subclasses that affect pH
	// then i can sum the deviations
	// and generate a pH "score" that will be fed to the MR model
};

//////////////////////////////
/* ---- yeast motility ---- */
//////////////////////////////

// yeast motility tracks how easy it will be for yeast to get to food sources
// directly affected by the presence of desiccants, whole grain, sweeteners -- especially glucose-based dry sweeteners, to a lesser extent fructose/maltose sweeteners, which are generally syrups

// yeast motility depends on the following factors:
// hydration: this is a synthetic category -- divide sum of liquids by totalFlour and assign a hydration score
// sweetener lowers yeastMotility
// salt lowers yeastMotility
// inclusions will generally lower yeastMotility
// preferments -- most will slightly raise yeast motility, biga lowers it at significant bp's, like the canonical ciabatta

const yeastMotility = (convertedRecipe, canonicalRecipe) => {
	// identify classes/subclasses that affect yeast motility
	// sum deviations
	// generate a yeastMotility "score" and feed it to the MR model
};

///////////////////////////////////
/* ---- yeast concentration ---- */
///////////////////////////////////

// yeast concentration tracks how much yeast will be present in the dough
// directly affected by amount of yeast used and preferments and their initial starter bp's

// yeast concentration depends on the following factors:
// yeast -- more yeast raises yeast concentration
// preferments -- more preferments raises yeast concentration

const yeastConcentration = (convertedRecipe, canonicalRecipe) => {
	// identify classes/subclasses that affect yeast concentration
	// sum deviations
	// generate a yeastMotility "score" and feed it to the MR model
};
