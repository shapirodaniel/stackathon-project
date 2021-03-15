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
		if (!recipe.hasOwnProperty(ingredientClass)) continue;
		const ingredients = recipe[ingredientClass];
		res += ingredients
			.map(ingredient => `${ingredient.bp} ${ingredient.name} `)
			.join('');
	}
	return res.trim();
};

const recipeStrings = {
	countrySour:
		'35 bread flour 30 ap 25 whole wheat 10 rye 80 water 2.75 salt 15 levain',
	brioche:
		'100 ap 2 salt 4 fresh yeast 60 whole egg 40 butter 10 sugar 8 poolish',
	milkBread:
		'100 bread flour 2.5 salt 4.5 fresh yeast 75 milk 5 butter 7.5 sugar 45 yudane',
	englishMuffin:
		'80 ap 20 whole wheat flour 80 liquid 2.5 salt 3.33 fresh yeast',
	rye:
		'75 bread flour 25 rye 7 caraway seed 75 water 2.5 salt 0.75 fresh yeast 5 poolish 10 levain',
	wholeWheat:
		'40 bread flour 60 whole wheat 80 water 2.5 salt 0.75 fresh yeast 10 honey 5 poolish',
	pizza:
		'86 bread flour 14 ap 89.7 water 10 olive oil 2.35 salt undefined fresh yeast',
	ciabatta:
		'100 ap 54.3 water 2.85 olive oil 2.85 salt 0.6875 fresh yeast 14.3 milk 100 biga',
	focaccia:
		'100 ap 75 water 15 olive oil 2.5 salt 0.75 fresh yeast 5 poolish',
	painDeMie: '100 ap 20 water 2 salt 4 fresh yeast 4 sugar 40 milk 10 butter',
	multigrain:
		'100 bread flour 80 water 2.5 salt 0.75 fresh yeast 8 honey 20 levain 45 seed soaker',
	pretzel:
		'84 bread flour 16 ap 0.35 diastatic malt powder 49 water 2.25 salt 0.75 fresh yeast 8 butter 20 levain',
	bagel:
		'100 hi gluten flour 0.75 diastatic malt powder 45 water 2.2 salt 0.75 fresh yeast 3.4 barley malt syrup 20 levain 25 poolish',
	challah:
		'65 bread flour 35 ap 33 water 7.4 oil 1.9 salt 3.33 fresh yeast 7.8 sugar 18.3 whole egg 8.7 yolk',
	cinnamonPotato:
		'90 ap 10 whole wheat 8 milk powder 45 water 2 salt 7 fresh yeast 20 cinnamon sugar 15 butter 40 mashed potato',
};

const canonicalScores = {
	countrySour: { pH: 210, yeastMotility: 295, yeastConcentration: 0 },
	brioche: { pH: 200, yeastMotility: 52.5, yeastConcentration: 17.5 },
	milkBread: { pH: 200, yeastMotility: 276.875, yeastConcentration: 13.125 },
	englishMuffin: { pH: 200, yeastMotility: 50, yeastConcentration: 0 },
	rye: { pH: 225, yeastMotility: 287.5, yeastConcentration: 0 },
	wholeWheat: { pH: 200, yeastMotility: 290, yeastConcentration: 0 },
	pizza: { pH: 200, yeastMotility: 319.1, yeastConcentration: 0 },
	ciabatta: {
		pH: 200,
		yeastMotility: 255.79999999999998,
		yeastConcentration: 0,
	},
	focaccia: { pH: 200, yeastMotility: 275, yeastConcentration: 0 },
	painDeMie: { pH: 200, yeastMotility: 231, yeastConcentration: 7 },
	multigrain: { pH: 200, yeastMotility: 290, yeastConcentration: 0 },
	pretzel: { pH: 200, yeastMotility: 197, yeastConcentration: 0 },
	bagel: { pH: 200, yeastMotility: 186.7, yeastConcentration: 4.25 },
	challah: { pH: 200, yeastMotility: 150.95, yeastConcentration: 13.65 },
	cinnamonPotato: { pH: 200, yeastMotility: 214, yeastConcentration: 35 },
};

module.exports = {
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
	recipeStrings,
	canonicalScores,
	getRecipeString,
};

// convert yeast on the frontend with a conversion factor
// all yeast will be in fresh yeast yeast quantities

// define conversion factor for commercial yeasts
/*
 * 1 fresh yeast yeast = .4 ADY
 * 1 fresh yeast yeast = .33 instant
 * 1 ADY = .825 instant
 */

// preferments are structured differently
// ex., preferments: [{ name: poolish, bp: 10: recipe: preferments.poolish }, ...]
