// stemming supported via Porter, Lancaster (Paice-Husk) algos
const natural = require('natural');
const porter = natural.PorterStemmer;
const lancaster = natural.LancasterStemmer;

// porter is more commonly used, slightly worse performance
// lancaster is much more aggressive, which is useful for trimming huge datasets
console.log(porter.stem('happenings')); // returns 'happen'
console.log(lancaster.stem('happenings')); // returns 'hap'

// attach() patches stem() and tokenizeAndStem() to String
// shortcut to PorterStemmer.stem(token)
const input = "it's beginning to look a lot like christmas!";
console.log(porter.tokenizeAndStem(input), lancaster.tokenizeAndStem(input));
// return: [ 'begin', 'look', 'lot', 'christma' ] [ 'begin', 'look', 'lot', 'christma' ] <- NOT a typo!
