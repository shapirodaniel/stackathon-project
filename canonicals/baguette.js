const { levain24Hr, poolish24Hr } = require('./preferments');

const baguette = {
	flour: [
		{
			name: 'bread flour',
			bp: 70,
		},
		{
			name: 'ap flour',
			bp: 25,
		},
		{ name: 'whole wheat flour', bp: 5 },
	],
	dries: [
		{
			name: 'diastatic malt powder',
			bp: 0.25,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 82.5,
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
			name: 'fresh yeast',
			bp: 0.75,
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
			bp: 10,
			recipe: poolish24Hr,
		},
	],
};

module.exports = baguette;
