const { levain24Hr } = require('../preferments');

const countrySour = {
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
			recipe: levain24Hr,
		},
	],
};

module.exports = countrySour;
