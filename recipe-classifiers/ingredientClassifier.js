/////////////////////////////////
/* ---- SET UP CLASSIFIER ---- */
/////////////////////////////////

// require the main library
const natural = require('natural');

// define a bayesian classifier for ingredients
const ingredientClassifier = new natural.BayesClassifier();

// require the corpuses that will be used to train the classifier
const { allEggTrainingData } = require('./training-data');
const { allFlourTrainingData } = require('./training-data');
const { allInclusionCorpus } = require('./training-data');
const { allLiquidTrainingData } = require('./training-data');
const { allSweetenerTrainingData } = require('./training-data');
const { allYeastTrainingData } = require('./training-data');
const { allSaltTrainingData } = require('./training-data');

// add docs
ingredientClassifier.addDocument(allEggTrainingData, 'egg');
ingredientClassifier.addDocument(allFlourTrainingData, 'flour');
ingredientClassifier.addDocument(allInclusionCorpus, 'inclusion');
ingredientClassifier.addDocument(allLiquidTrainingData, 'liquid');
ingredientClassifier.addDocument(allSweetenerTrainingData, 'sweetener');
ingredientClassifier.addDocument(allYeastTrainingData, 'yeast');
ingredientClassifier.addDocument(allSaltTrainingData, 'salt');

// train the classifier
ingredientClassifier.train();

module.exports = ingredientClassifier;
