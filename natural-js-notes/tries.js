// tries are a very efficient data structure used for prefix-based searches -- natural comes packaged with a basic Trie implementation which can support match collection along a path, existence search and prefix search

// add words to build up dictionary of the trie
const natural = require('natural');
const { Trie } = natural;
const trie = new Trie();

// add single strings
trie.addString('test');

// add multiple with an array
trie.addStrings(['string1', 'string2', 'string3']);
console.log(trie);

/* searching */

// contains:
// the most basic operation on a trie is to see if a search string is marked as a word in the Trie
console.log(trie.contains('test')); // true
console.log(trie.contains('asdf')); // false

// find prefix:
// the find prefix search will find the longest prefix that is identified as a word in the trie -- it will also return the remaining portion of the string which it was not able to match.
console.log(trie.findPrefix('tester')); // ['test', 'er']
console.log(trie.findPrefix('string4')); // [null, '4']
console.log(trie.findPrefix('string3')); // ['string3', '']

// all prefixes on path
// this search will return all prefix matches along the search path
trie.addString('tes');
trie.addString('test');
console.log(trie.findMatchesOnPath('tester')); // ['tes', 'test']

// all keys with prefix
// this search will return all of the words in the Trie path with the given prefix or [] if not found
console.log(trie.keysWithPrefix('string')); // ['string1', 'string2', 'string3']

// case sensitivity
// by default the trie is case-sensitive, you can use it in case-insensitive mode by passing false to the Trie constructor
trie.contains('TEST'); // false

const caseInsensitiveTrie = new Trie(false);
caseInsensitiveTrie.addString('test');
const ciResult = caseInsensitiveTrie.contains('TEsT');
console.log(ciResult); // true
// all strings returned from searches in ci-mode are lower case
