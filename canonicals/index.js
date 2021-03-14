const countrySour = require('./countrySour');
const brioche = require('./brioche');
const milkBread = require('./milkBread');
const englishMuffin = require('./englishMuffin');
const rye = require('./rye');
const wholeWheat = require('./wholeWheat');
const pizza = require('./pizza');
const ciabatta = require('./ciabatta');
const focaccia = require('./focaccia');
const painDeMie = require('./painDeMie');
const multigrain = require('./multigrain');
const pretzel = require('./pretzel');
const bagel = require('./bagel');
const challah = require('./challah');
const cinnamonPotato = require('./cinnamonPotato');
const generic = require('./generic');

const getRecipeString = recipe => {
	let res = '';
	for (ingredientClass in recipe) {
		const ingredients = recipe[ingredientClass];
		res += ingredients
			.map(ingredient => `${ingredient.bp} ${ingredient.name} `)
			.join('');
	}
	return res.trim();
};

module.exports = breads = {
	countrySour,
	brioche,
	milkBread,
	englishMuffin,
	rye,
	wholeWheat,
	pizza,
	ciabatta,
	focaccia,
	painDeMie,
	multigrain,
	pretzel,
	bagel,
	challah,
	cinnamonPotato,
	generic,
	getRecipeString,
};

// convert yeast on the frontend with a conversion factor
// all yeast will be in fresh yeast quantities

// define conversion factor for commercial yeasts
/*
 * 1 fresh yeast = .4 ADY
 * 1 fresh yeast = .33 instant
 * 1 ADY = .825 instant
 */

// preferments are structured differently
// ex., preferments: [{ name: poolish, bp: 10: recipe: preferments.poolish }, ...]
