const { levain24Hr, poolish24Hr } = require('./preferments');

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
			recipe: levain24Hr,
		},
		{
			name: 'poolish',
			bp: 25,
			recipe: poolish24Hr,
		},
	],
};

module.exports = bagel;
