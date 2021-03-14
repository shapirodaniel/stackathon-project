/////////////////////////////////
/* ---- SET UP CLASSIFIER ---- */
/////////////////////////////////

// require the main library
const natural = require('natural');

// define a bayesian classifier for ingredients
const ingredientClassifier = new natural.BayesClassifier();

// require the corpuses that will be used to train the classifier
const corpii = require('./training-data');

// train the classifier
// addDocument() takes a corpus: array of strings, and a class: string
for (corpus of corpii) {
	// get the class from the corpus key
	const ingredientClass = Object.keys(corpus)[0];

	// add the corpus's training data to the classifier
	ingredientClassifier.addDocument(corpus[ingredientClass], ingredientClass);
}
// train the classifier
ingredientClassifier.train();

module.exports = ingredientClassifier;
