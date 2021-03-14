const natural = require('natural');
const eggClassifier = new natural.BayesClassifier();
const {
	wholeEggTrainingData,
	eggYolkTrainingData,
} = require('../training-data');

eggClassifier.addDocument(wholeEggTrainingData, 'whole egg');
eggClassifier.addDocument(eggYolkTrainingData, 'yolk');
eggClassifier.train();

// train to recognize whole egg, yolk
// mostly for comparing enriched dough egg-type content

module.exports = eggClassifier;
