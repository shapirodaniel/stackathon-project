const natural = require('natural');
const yeastClassifier = natural.BayesClassifier();
module.exports = yeastClassifier;

// train to recognize instant, ady, fresh yeast
