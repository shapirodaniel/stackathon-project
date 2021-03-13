const natural = require('natural');
const flourClassifier = natural.BayesClassifier();
module.exports = flourClassifier;

// train to recognize white, wheat, rye, ancient grain
// where ancient grains will be weighted like wheat

// sub-classify by extraction if that stem is present
const extractionClassifier = natural.BayesClassifier();
