const natural = require('natural');
const flourClassifier = natural.BayesClassifier();
const {
	wholeGrainTrainingData,
	ryeTrainingData,
	hiExtractionTrainingData,
} = require('../training-data');

flourClassifier.addDocument(wholeGrainTrainingData, 'whole grain');
flourClassifier.addDocument(ryeTrainingData, 'rye');
flourClassifier.addDocument(hiExtractionTrainingData, 'hi extraction');

flourClassifier.train();

// train to recognize white, wheat (including most ancient grains under the "wheat" subclass), rye, hi-extraction

module.exports = flourClassifier;
