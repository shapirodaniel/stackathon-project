const natural = require('natural');
const yeastClassifier = natural.BayesClassifier();
const { yeastTrainingData } = require('../training-data');

yeastClassifier.addDocument(yeastTrainingData, 'yeast');
yeastClassifier.train();

// train to recognize instant, ady, fresh yeast
module.exports = yeastClassifier;
