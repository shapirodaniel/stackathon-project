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
			name: 'fresh',
			bp: 0.75,
		},
	],
	preferment: [{ name: 'poolish', bp: 5, recipe: preferments.poolish }],
};

module.exports = focaccia;
