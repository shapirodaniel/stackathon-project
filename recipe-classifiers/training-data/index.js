const {
	allFlourTrainingData,
	wholeGrainTrainingData,
	ryeTrainingData,
	hiExtractionTrainingData,
} = require('./flourCorpus');

const {
	allLiquidTrainingData,
	waterTrainingData,
	milkTrainingData,
	oilTrainingData,
} = require('./liquidCorpus');

const { allYeastTrainingData, yeastTrainingData } = require('./yeastCorpus');

const {
	allSweetenerTrainingData,
	drySweetenerTrainingData,
	syrupTrainingData,
} = require('./sweetenerCorpus');

const {
	wholeEggTrainingData,
	eggYolkTrainingData,
	allEggTrainingData,
} = require('./eggCorpus');

const {
	allInclusionCorpus,
	seedTrainingData,
	nutTrainingData,
	driedFruitTrainingData,
} = require('./inclusionCorpus');

const {
	allPrefermentTrainingData,
	neutralPrefermentTrainingData,
	activeStiffPrefermentTrainingData,
	fullHydrationPrefermentTrainingData,
} = require('./prefermentCorpus');

const { allSaltTrainingData, saltTrainingData } = require('./saltCorpus');

module.exports = {
	// flour
	allFlourTrainingData,
	wholeGrainTrainingData,
	ryeTrainingData,
	hiExtractionTrainingData,
	// liquid
	allLiquidTrainingData,
	waterTrainingData,
	milkTrainingData,
	oilTrainingData,
	// yeast
	allYeastTrainingData,
	yeastTrainingData,
	// sweetener
	allSweetenerTrainingData,
	drySweetenerTrainingData,
	syrupTrainingData,
	// egg
	wholeEggTrainingData,
	eggYolkTrainingData,
	allEggTrainingData,
	// inclusion
	allInclusionCorpus,
	seedTrainingData,
	nutTrainingData,
	driedFruitTrainingData,
	// salt
	allSaltTrainingData,
	saltTrainingData,
	// preferment
	allPrefermentTrainingData,
	neutralPrefermentTrainingData,
	activeStiffPrefermentTrainingData,
	fullHydrationPrefermentTrainingData,
};
