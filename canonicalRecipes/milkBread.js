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

module.exports = milkBread;
