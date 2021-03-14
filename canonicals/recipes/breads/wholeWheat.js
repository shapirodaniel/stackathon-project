const { poolish24Hr } = require('../preferments');

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
			name: 'fresh',
			bp: 0.75,
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
			recipe: poolish24Hr,
		},
	],
};

module.exports = wholeWheat;
