const multigrain = {
	flour: [
		{
			name: 'bread',
			bp: 100,
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
			name: 'instant',
			bp: 0.25,
		},
	],
	sweetener: [
		{
			name: 'honey',
			bp: 8,
		},
	],
	preferment: [
		{
			name: 'levain',
			bp: 20,
		},
	],
	inclusion: [
		{
			name: 'seed soaker',
			bp: 45,
			recipe: seedSoaker,
		},
	],
};

module.exports = multigrain;