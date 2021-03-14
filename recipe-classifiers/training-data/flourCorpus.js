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

const allFlourTrainingData = [...wholeGrainTrainingData].concat(
	ryeTrainingData,
	hiExtractionTrainingData
);

module.exports = {
	allFlourTrainingData,
	wholeGrainTrainingData,
	ryeTrainingData,
	hiExtractionTrainingData,
};
