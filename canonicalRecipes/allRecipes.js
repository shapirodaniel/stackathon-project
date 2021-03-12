const preferments = require('./preferment');
const { seedSoaker } = require('./soaker');

module.exports = {
	painDeCampagne,
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
};

// define conversion factor for commercial yeasts
/*
 * 1 fresh yeast = .4 ADY
 * 1 fresh yeast = .33 instant
 * 1 ADY = .825 instant
 */

// preferments are structured differently
// ex., preferments: [{ name: poolish, bp: 10: recipe: preferments.poolish }, ...]

const painDeCampagne = {
	flour: [
		{
			name: 'bread',
			bp: 35,
		},
		{
			name: 'ap',
			bp: 30,
		},
		{ name: 'whole wheat', bp: 25 },
		{ name: 'rye', bp: 10 },
	],
	liquid: [
		{
			name: 'water',
			bp: 80,
		},
	],
	salt: [
		{
			name: 'salt',
			bp: 2.75,
		},
	],
	yeast: [],
	preferment: [
		{
			name: 'levain',
			bp: 15,
		},
	],
};

const brioche = {
	flour: [
		{
			name: 'ap',
			bp: 100,
		},
	],
	liquid: [],
	salt: [
		{
			name: 'salt',
			bp: 2,
		},
	],
	yeast: [
		{
			name: 'fresh',
			bp: 4,
		},
	],
	egg: [{ name: 'whole egg', bp: 60 }],
	dairy: [{ name: 'butter', bp: 40 }],
	sweetener: [{ name: 'sugar', bp: 10 }],
	preferment: [{ name: 'poolish', bp: 8, recipe: preferments.poolish }],
};

const milkBread = {
	flour: [
		{
			name: 'bread',
			bp: 100,
		},
	],
	liquid: [],
	salt: [
		{
			name: 'salt',
			bp: 2.5,
		},
	],
	yeast: [
		{
			name: 'instant',
			bp: 1.5,
		},
	],
	dairy: [
		{
			name: 'milk',
			bp: 75,
		},
		{
			name: 'butter',
			bp: 5,
		},
	],
	sweetener: [{ name: 'sugar', bp: 7.5 }],
	preferment: [
		{
			name: 'yudane',
			bp: 45,
			recipe: preferments.yudane,
		},
	],
};

const englishMuffin = {
	flour: [
		{
			name: 'all purpose flour',
			bp: '80',
		},
		{
			name: 'whole wheat flour',
			bp: '20',
		},
	],
	liquid: [
		{
			name: 'liquid',
			bp: '80',
		},
	],
	salt: [
		{
			name: 'salt',
			bp: '2.5',
		},
	],
	yeast: [
		{
			name: 'instant',
			bp: '1',
		},
	],
};

const rye = {
	flour: [
		{
			name: 'bread',
			bp: 75,
		},
		{ name: 'rye', bp: 25 },
	],
	dries: [
		{
			name: 'caraway seed',
			bp: 7,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 75,
		},
	],
	salt: [
		{
			name: 'salt',
			bp: 2.5,
		},
	],
	yeast: [
		{
			name: 'instant',
			bp: 0.25,
		},
	],
	preferment: [
		{
			name: 'poolish',
			bp: 5,
		},
		{
			name: 'levain',
			bp: 10,
		},
	],
};

const wholeWheat = {
	flour: [
		{
			name: 'bread',
			bp: 40,
		},
		{
			name: 'whole wheat',
			bp: 60,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 80,
		},
	],
	salt: [
		{
			name: 'salt',
			bp: 2.5,
		},
	],
	yeast: [
		{
			name: 'instant',
			bp: 0.25,
		},
	],
	sweetener: [
		{
			name: 'honey',
			bp: 10,
		},
	],
	preferment: [
		{
			name: 'poolish',
			bp: 5,
		},
	],
};

const pizza = {
	flour: [
		{
			name: 'bread',
			bp: 86,
		},
		{ name: 'ap', bp: 14 },
	],
	liquid: [
		{
			name: 'water',
			bp: 89.7,
		},
		{ name: 'olive oil', bp: 10 },
	],
	salt: [
		{
			name: 'salt',
			bp: 2.35,
		},
	],
	yeast: [
		{
			name: 'instant',
			amount: 0.075,
		},
	],
};

const ciabatta = {
	flour: [
		{
			name: 'ap',
			bp: 100,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 54.3,
		},
		{
			name: 'olive oil',
			bp: 2.85,
		},
	],
	salt: [
		{
			name: 'salt',
			bp: 2.85,
		},
	],
	yeast: [
		{
			name: 'active dry',
			bp: 0.55,
		},
	],

	dairy: [
		{
			name: 'milk',
			bp: 14.3,
		},
	],
	preferment: [
		{
			name: 'biga',
			bp: 100,
			recipe: preferments.biga,
		},
	],
};

const focaccia = {
	flour: [
		{
			name: 'ap',
			bp: 100,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 75,
		},
		{
			name: 'olive oil',
			bp: 15,
		},
	],
	salt: [
		{
			name: 'salt',
			bp: 2.5,
		},
	],
	yeast: [
		{
			name: 'instant',
			bp: 0.25,
		},
	],
	preferment: [{ name: 'poolish', bp: 5, recipe: preferments.poolish }],
};

const painDeMie = {
	flour: [
		{
			name: 'ap',
			bp: 100,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 20,
		},
	],
	salt: [
		{
			name: 'salt',
			bp: 2,
		},
	],
	yeast: [
		{
			name: 'fresh',
			bp: 4,
		},
	],
	sweetener: [
		{
			name: 'sugar',
			bp: 4,
		},
	],
	dairy: [
		{
			name: 'milk',
			bp: 40,
		},
		{ name: 'butter', bp: 10 },
	],
};

const multigrain = {
	flour: [
		{
			name: 'bread',
			bp: 100,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 80,
		},
	],
	salt: [
		{
			name: 'salt',
			bp: 2.5,
		},
	],
	yeast: [
		{
			name: 'instant',
			bp: 0.25,
		},
	],
	sweetener: [
		{
			name: 'honey',
			bp: 8,
		},
	],
	preferment: [
		{
			name: 'levain',
			bp: 20,
		},
	],
	inclusion: [
		{
			name: 'seed soaker',
			bp: 45,
			recipe: seedSoaker,
		},
	],
};

const pretzel = {
	flour: [
		{
			name: 'bread',
			bp: 84,
		},
		{
			name: 'ap',
			bp: 16,
		},
	],
	dries: [
		{
			name: 'diastatic malt powder',
			bp: 0.35,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 49,
		},
	],
	salt: [
		{
			name: 'salt',
			bp: 2.25,
		},
	],
	yeast: [
		{
			name: 'instant',
			bp: 0.25,
		},
	],
	dairy: [
		{
			name: 'butter',
			bp: 8,
		},
	],
	preferment: [
		{
			name: 'levain',
			bp: 20,
		},
	],
};

const bagel = {
	flour: [
		{
			name: 'hi gluten',
			bp: 100,
		},
	],
	dries: [
		{
			name: 'diastatic malt powder',
			bp: 0.75,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 45,
		},
	],
	salt: [
		{
			name: 'salt',
			bp: 2.2,
		},
	],
	yeast: [
		{
			name: 'fresh',
			bp: 0.75,
		},
	],
	sweetener: [
		{
			name: 'barley malt syrup',
			bp: 3.4,
		},
	],
	preferment: [
		{
			name: 'levain',
			bp: 20,
		},
		{
			name: 'poolish',
			bp: 25,
		},
	],
};

const challah = {
	flour: [
		{
			name: 'bread',
			bp: 65,
		},
		{ name: 'ap', bp: 35 },
	],
	liquid: [
		{
			name: 'water',
			bp: 33,
		},
		{
			name: 'oil',
			bp: 7.4,
		},
	],
	salt: [
		{
			name: 'salt',
			bp: 1.9,
		},
	],
	yeast: [
		{
			name: 'instant',
			bp: 1,
		},
	],
	sweetener: [
		{
			name: 'sugar',
			bp: 7.8,
		},
	],
	egg: [
		{
			name: 'whole egg',
			bp: 18.3,
		},
		{ name: 'yolk', bp: 8.7 },
	],
};

const cinnamonPotato = {
	flour: [
		{
			name: 'ap',
			bp: 90,
		},
		{
			name: 'whole wheat',
			bp: 10,
		},
	],
	dries: [
		{
			name: 'milk powder',
			bp: 8,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 45,
		},
	],
	salt: [
		{
			name: 'salt',
			bp: 2,
		},
	],
	yeast: [
		{
			name: 'instant',
			bp: 2.325,
		},
	],
	sweetener: [
		{
			name: 'cinnamon sugar',
			bp: 20,
		},
	],
	dairy: [
		{
			name: 'butter',
			bp: 15,
		},
	],
	inclusion: [
		{
			name: 'mashed potato',
			bp: 40,
		},
	],
};

// still need lamination dough, eventually ...

// generic is the template for recipes
const generic = {
	flour: [{}],
	dries: [{}],
	liquid: [{}],
	salt: [{}],
	yeast: [{}],
	sweetener: [{}],
	egg: [{}],
	dairy: [{}],
	preferment: [{}],
	inclusion: [{}],
};
