const { poolish24Hr } = require('../preferments');

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
	preferment: [{ name: 'poolish', bp: 8, recipe: poolish24Hr }],
};

module.exports = brioche;
