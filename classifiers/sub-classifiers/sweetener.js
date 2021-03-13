const natural = require('natural');
const sweetenerClassifier = natural.BayesClassifier();
module.exports = sweetenerClassifier;

// train to recognize dry sweeteners, syrups
// if dry, canonical model will expect more liquid to offset
// we'll consider syrups to be neutral wrt liquid -- above a certain threshold the effects of the sugar would outweight the effect of added liquid
