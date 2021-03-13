const natural = require('natural');
const inclusionClassifier = natural.BayesClassifier();
module.exports = inclusionClassifier;

// train to recognize the inclusions that will require a large liquid offest -- seeds, nuts, dried produces (fruits, vegetables, etc.)

// we'll state a hierarchy of effects:
// seeds > dried produces > nuts
// relative to their water holding capacities (whc)
// whc varies with temp and pH so it's a good independent variable to classify the effect of adding equal weights of seed and nuts, for example -- we should expect a good deal more liquid necessary to offset the weight of seed than equal weight in nut
