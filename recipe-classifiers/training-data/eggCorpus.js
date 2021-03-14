const wholeEggTrainingData = [
	'whole egg',
	'large egg',
	'medium egg',
	'small egg',
	'liquid egg',
	'egg',
	'eggs',
];

const eggYolkTrainingData = ['egg yolk', 'yolk', 'yolks', 'liquid yolk'];

const allEggTrainingData = [...wholeEggTrainingData].concat(
	eggYolkTrainingData
);

module.exports = {
	wholeEggTrainingData,
	eggYolkTrainingData,
	allEggTrainingData,
};
