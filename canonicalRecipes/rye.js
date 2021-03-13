const { poolish24Hr, levain24Hr } = require('./preferments');

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
			name: 'fresh',
			bp: 0.75,
		},
	],
	preferment: [
		{
			name: 'poolish',
			bp: 5,
			recipe: poolish24Hr,
		},
		{
			name: 'levain',
			bp: 10,
			recipe: levain24Hr,
		},
	],
};

module.exports = rye;
