const natural = require('natural');
const prefermentClassifier = new natural.BayesClassifier();

const {
	neutralPrefermentTrainingData,
	activeStiffPrefermentTrainingData,
	fullHydrationPrefermentTrainingData,
} = require('../training-data');

prefermentClassifier.addDocument(neutralPrefermentTrainingData, 'neutral');
prefermentClassifier.addDocument(activeStiffPrefermentTrainingData, 'stiff');
prefermentClassifier.addDocument(fullHydrationPrefermentTrainingData, 'loose');

prefermentClassifier.train();

module.exports = prefermentClassifier;
