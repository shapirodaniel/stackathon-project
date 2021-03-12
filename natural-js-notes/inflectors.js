/* inflectors */
const natural = require('natural');
const nounInflector = new natural.NounInflector();

// pluralize a word
console.log(nounInflector.pluralize('radius')); // returns 'radii'

// singluarize a word
console.log(nounInflector.singularize('beers')); // returns 'beer'

// numbers can be counted with a countInflector
const countInflector = natural.CountInflector;
console.log(countInflector.nth(1)); // returns '1st'
console.log(countInflector.nth(111)); // returns '111th'

// present tense verbs can be pluralized/singularized with a PresentVerbInflector
// experimental as of 0.0.42 -- things may have changed ...
const verbInflector = new natural.PresentVerbInflector();
console.log(verbInflector.singularize('become')); // returns 'becomes'
console.log(verbInflector.pluralize('becomes')); // returns 'become'
