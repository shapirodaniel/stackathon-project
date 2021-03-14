const waterTrainingData = [
	'water',
	'h20',
	'H20',
	'h2o',
	'h2O',
	'H2O',
	'ice',
	'ice cubes',
	'crushed ice',
];

const milkTrainingData = ['milk', 'whole milk', '2% milk', 'skim milk'];

const oilTrainingData = [
	'evoo',
	'olive oil',
	'extra virgin olive oil',
	'light olive oil',
	'coconut oil',
	'canola oil',
	'canola',
	'peanut oil',
	'sesame oil',
	'vegetable oil',
	'sunflower oil',
	'rapeseed oil',
	'grapeseed oil',
	'arbequina',
];

const allLiquidTrainingData = [...waterTrainingData].concat(
	milkTrainingData,
	oilTrainingData
);

module.exports = {
	allLiquidTrainingData,
	waterTrainingData,
	milkTrainingData,
	oilTrainingData,
};
