const natural = require('natural');
const eggClassifier = natural.BayesClassifier();
module.exports = eggClassifier;

// train to recognize whole egg, yolk, whites
// mostly for comparing enriched dough egg-type content
// (hard to imagine a situation where egg-whites are a valuable metric)
