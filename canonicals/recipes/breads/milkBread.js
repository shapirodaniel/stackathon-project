const { yudane } = require('../preferments');

const milkBread = {
	flour: [
		{
			name: 'bread flour',
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
			name: 'fresh',
			bp: 4.5,
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
			recipe: yudane,
		},
	],
};

module.exports = milkBread;
