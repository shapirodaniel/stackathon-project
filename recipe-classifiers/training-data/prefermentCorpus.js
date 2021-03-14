const neutralPrefermentTrainingData = ['tangzhong', 'yudane'];

const activeStiffPrefermentTrainingData = [
	'lievito madre',
	'chef',
	'biga',
	'pate fermentee',
	'old dough',
	'stiff starter',
];

const fullHydrationPrefermentTrainingData = [
	'starter',
	'sourdough starter',
	'sour dough starter',
	'mother',
	'levain',
	'leaven',
	'poolish',
	'sponge',
];

const allPrefermentTrainingData = [...neutralPrefermentTrainingData].concat(
	activeStiffPrefermentTrainingData,
	fullHydrationPrefermentTrainingData
);

module.exports = {
	allPrefermentTrainingData,
	neutralPrefermentTrainingData,
	activeStiffPrefermentTrainingData,
	fullHydrationPrefermentTrainingData,
};
