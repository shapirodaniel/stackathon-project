const tangzhong = {
	flour: [
		{
			name: 'bread',
			bp: 100,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 307,
		},
		{ name: 'milk', bp: 307 },
	],
};

const yudane = {
	flour: [
		{
			name: 'bread',
			bp: 100,
		},
	],
	liquid: [
		{
			name: 'boiling water',
			bp: 80,
		},
	],
};

const levain12Hr = {
	flour: [
		{
			name: 'ap',
			bp: 100,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 100,
		},
	],
	starter: [
		{
			name: 'sourdough starter',
			bp: 15,
		},
	],
};

const levain24Hr = {
	flour: [
		{
			name: 'ap',
			bp: 100,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 100,
		},
	],
	starter: [
		{
			name: 'sourdough starter',
			bp: 5,
		},
	],
};

const poolish = {
	flour: [
		{
			name: 'ap',
			bp: 100,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 100,
		},
	],
	yeast: [
		{
			name: 'fresh yeast',
			bp: 0.25,
		},
	],
};

const biga = {
	flour: [
		{
			name: 'ap',
			bp: 100,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 65,
		},
	],
	salt: [
		{
			name: 'salt',
			bp: 0.5,
		},
	],
	yeast: [
		{
			name: 'instant',
			bp: 0.1,
		},
	],
};

const sponge = {
	flour: [
		{
			name: 'ap',
			bp: 100,
		},
	],
	liquid: [
		{
			name: 'water',
			bp: 148,
		},
	],
	yeast: [
		{
			name: 'instant',
			bp: 1.22,
		},
	],
};

module.exports = {
	tangzhong,
	yudane,
	levain12Hr,
	levain24Hr,
	poolish,
	biga,
	sponge,
};
