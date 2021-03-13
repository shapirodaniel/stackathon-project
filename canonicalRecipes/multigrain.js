const { levain24Hr } = require('./preferments');
const { seedSoaker } = require('./inclusions');
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
			name: 'fresh',
			bp: 0.75,
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
			recipe: levain24Hr,
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
