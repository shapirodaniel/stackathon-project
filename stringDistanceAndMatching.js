/*

  edit distance is a way of quantifying how dissimilar two strings (e.g., words) are to one another by counting the minimum number of operations required to transform one string into the other. Edit distances find applications in natural language processing, where automatic spelling correction can determine candidate corrections for a misspelled word by selecting words from a dictionary that have a low distance to the word in question.

  Hamming distance between two strings of equal length is the number of positions at which the corresponding symbols are different. In other words, it measures the minimum number of substitutions required to change one string into the other, or the minimum number of errors that could have transformed one string into the other. In a more general context, the Hamming distance is one of several string metrics for measuring the edit distance between two sequences

*/

const natural = require('natural');

// natural.HammingDistance() measures edit distance
// returns -1 if strings are different lengths
console.log(natural.HammingDistance('karolin', 'kathrin', false));
console.log(natural.HammingDistance('karolin', 'krabbyp', false));
console.log(natural.HammingDistance('karolin', 'apple', false));

// natural.JaroWinklerDistance() measures similarity
// on scale 0 (not at all) to 1 (exact match)
console.log(natural.JaroWinklerDistance('peanuts', 'poptarts'));

// if distance is known it can be passed as third param
// to ignore case pass a fourth boolean param
console.log(
	natural.JaroWinklerDistance('peanuts', 'poptarts', undefined, true)
);

// natural.LevenshteinDistance() also measures edit distance
/* the Levenshtein distance is a string metric for measuring the difference between two sequences. Informally, the Levenshtein distance between two words is the minimum number of single-character edits (insertions, deletions or substitutions) required to change one word into the other. */
console.log(natural.LevenshteinDistance('karolin', 'kathrin'));

// cost of edit operations
console.log(
	natural.LevenshteinDistance('monkeys', 'mondays', {
		insertion_cost: 1,
		deletion_cost: 1,
		substitution_cost: 1,
	})
);
