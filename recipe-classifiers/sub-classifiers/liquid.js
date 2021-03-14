const natural = require('natural');
const liquidClassifier = natural.BayesClassifier();
const {
	waterTrainingData,
	milkTrainingData,
	oilTrainingData,
} = require('../training-data');

liquidClassifier.addDocument(waterTrainingData, 'water');
liquidClassifier.addDocument(milkTrainingData, 'milk');
liquidClassifier.addDocument(oilTrainingData, 'oil');

liquidClassifier.train();

// train to recognize water, milk, oil
module.exports = liquidClassifier;
