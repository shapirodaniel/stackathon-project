/*
a simple sentiment analysis algo based on a vocab that assigns polarity to words
the algo calculates the sentiment of a piece of text by summing
the polarity of each word and normalizing the length of the sentence
if a negation occurs the result is made negative
ex.,
*/
const Analyzer = require('natural').SentimentAnalyzer;
const stemmer = require('natural').PorterStemmer;
const analyzer = new Analyzer('English', stemmer, 'afinn');

// getSentiment expects an array of strings
console.log(
	analyzer.getSentiment([
		'i',
		'love',
		'coding',
		'it',
		"'s",
		'too',
		'much',
		'fun',
	]), // 0.75
	analyzer.getSentiment(['i', 'love', 'horsing', 'around']) // 0.5
);

/* constructor takes three params:

  Language, Stemmer, Vocabulary
  Vocabulary is either 'afinn', 'senticon', or 'pattern'

  AFINN is a list of English words rated for valence with an integer between minus five (negative) and plus five (positive). The words have been manually labeled by Finn Årup Nielsen in 2009-2011. Scientific reference can be found here. We used afinn-165 which is available as nodejs module.

*/
