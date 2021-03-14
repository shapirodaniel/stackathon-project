const { levain24Hr } = require('../preferments');
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
			name: 'fresh',
			bp: 0.75,
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
			recipe: levain24Hr,
		},
	],
};

module.exports = pretzel;
