/* phonetic matching can be done with SoundEx, Metaphone or DoubleMetaphone algos */

const natural = require('natural');
const metaphone = natural.Metaphone;
const soundEx = natural.SoundEx;

const wordA = 'phonetics';
const wordB = 'fonetix';

if (metaphone.compare(wordA, wordB)) console.log('they sound alike!');

// raw phonetics obtained with process()
console.log(metaphone.process('phonetics')); // return FNTKS

// a max code length can be specified
console.log(metaphone.process('phonetics', 3)); // return FNT

// DoubleMetaphone deals with two encodings returned in an array
// experimental, subject to change
const dm = natural.DoubleMetaphone;
const encodings = dm.process('Matrix');
console.log(encodings[0], encodings[1]);

if (soundEx.compare(wordA, wordB)) console.log('they sound alike!');
else console.log('not a match :(');

const metaphoneAreAlike = (a, b) =>
	metaphone.compare(a, b) ? 'metaphone-alike' : 'metaphone-not-alike';

const soundExAreAlike = (a, b) =>
	soundEx.compare(a, b) ? 'soundEx-alike' : 'soundEx-not-alike';

const comparisons = [
	['fish', 'physh'],
	['drag', 'quagmire'],
	['yemen', 'lemon'],
	['monkey', 'donkey'],
	['feel', 'seal'],
	['play', 'sleigh'],
	['canteloupe', 'dope'],
];

comparisons.forEach(pair => {
	console.log(
		`${pair[0]} and ${pair[1]} are ${metaphoneAreAlike(pair[0], pair[1])}`
	);
	console.log(
		`${pair[0]} and ${pair[1]} are ${soundExAreAlike(pair[0], pair[1])}`
	);
});

/*

returns:

fish and physh are metaphone-alike
fish and physh are soundEx-not-alike
drag and quagmire are metaphone-not-alike
drag and quagmire are soundEx-not-alike
yemen and lemon are metaphone-not-alike
yemen and lemon are soundEx-not-alike
monkey and donkey are metaphone-not-alike
monkey and donkey are soundEx-not-alike
feel and seal are metaphone-not-alike
feel and seal are soundEx-not-alike
play and sleigh are metaphone-not-alike
play and sleigh are soundEx-not-alike
canteloupe and dope are metaphone-not-alike
canteloupe and dope are soundEx-not-alike

... so not terribly useful haha

*/
