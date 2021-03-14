const flourTrainingData = [
	'flour',
	'bread flour',
	'ap flour',
	'white flour',
	'strong flour',
	'plain flour',
	'ap',
	'ap flour',
	'all-purpose',
	'all purpose',
	'all-purpose flour',
	'all purpose flour',
	'bread',
	'bread flour',
	'hi-gluten flour',
	'hi-gluten bread flour',
	'ww',
	'ww flour',
	'whole-wheat flour',
	'whole wheat flour',
	'100% whole wheat flour',
	'rye',
	'rye flour',
	'sifted rye flour',
	'whole-kernel rye flour',
];

const wholeGrainTrainingData = [
	'spelt',
	'einkorn',
	'triticale',
	'whole wheat',
	'wheat',
	'100% whole wheat',
];

const ryeTrainingData = [
	'rye',
	'sifted rye',
	'whole-kernel rye',
	'whole kernel rye',
	'100% rye',
];

const hiExtractionTrainingData = ['hi-extraction', 'extraction', 'unsifted'];

const allFlourTrainingData = [...flourTrainingData].concat(
	wholeGrainTrainingData,
	ryeTrainingData,
	hiExtractionTrainingData
);

module.exports = {
	allFlourTrainingData,
	wholeGrainTrainingData,
	ryeTrainingData,
	hiExtractionTrainingData,
};
