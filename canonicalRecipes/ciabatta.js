const ciabatta = {
	flour: [
		{
			name: 'ap',
			bp: 100,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 54.3,
		},
		{
			name: 'olive oil',
			bp: 2.85,
		},
	],
	salt: [
		{
			name: 'salt',
			bp: 2.85,
		},
	],
	yeast: [
		{
			name: 'fresh',
			bp: 0.6875,
		},
	],

	dairy: [
		{
			name: 'milk',
			bp: 14.3,
		},
	],
	preferment: [
		{
			name: 'biga',
			bp: 100,
			recipe: preferments.biga,
		},
	],
};

module.exports = ciabatta;
