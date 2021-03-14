const seedTrainingData = [
	'sesame',
	'sunflower',
	'pumpkin',
	'pepita',
	'poppy',
	'caraway',
	'quinoa',
	'amaranth',
	'chia',
	'flax',
	'white sesame',
	'nigella',
	'black sesame',
	'millet',
	'rye berries',
	'wheat berries',
];

const nutTrainingData = [
	'walnut',
	'hazelnut',
	'almond',
	'pecan',
	'peanut',
	'pine nut',
	'pistachio',
	'marcona',
	'macadamia',
	'cashew',
];

const driedFruitTrainingData = [
	'raisin',
	'candied ginger',
	'dried apricot',
	'dried cherry',
	'dried cherries',
	'dried plum',
	'dried prune',
	'date ',
	'dried apple',
	'dried fig',
	'dried mango',
	'dried cranberry',
	'zante currant',
	'currant',
];

const allInclusionCorpus = [...seedTrainingData].concat(
	nutTrainingData,
	driedFruitTrainingData
);

module.exports = {
	allInclusionCorpus,
	seedTrainingData,
	nutTrainingData,
	driedFruitTrainingData,
};
