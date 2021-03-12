/* n-grams can be obtained for either arrays or strings
(which will be tokenized for you) */
const natural = require('natural');
const NGrams = natural.NGrams;

// bigrams
console.log(NGrams.bigrams('some words here'));
console.log(NGrams.bigrams(['some', 'words', 'here']));
// returns [ [ 'some', 'words' ], [ 'words', 'here' ] ]

// trigrams
console.log(NGrams.trigrams('some other words here'));
console.log(NGrams.trigrams(['some', 'other', 'words', 'here']));
// returns [ [ 'some', 'other', 'words' ], [ 'other', 'words', 'here' ] ]

// arbitrary n-grams
console.log(NGrams.ngrams('some other words here for you', 4));
console.log(NGrams.ngrams(['some', 'other', 'words', 'here', 'for', 'you'], 4));
// returns
/*
  [
    [ 'some', 'other', 'words', 'here' ],
    [ 'other', 'words', 'here', 'for' ],
    [ 'words', 'here', 'for', 'you' ]
  ]

  [
    [ 'some', 'other', 'words', 'here' ],
    [ 'other', 'words', 'here', 'for' ],
    [ 'words', 'here', 'for', 'you' ]
  ]
*/

// padding
/* n-grams can be returned with left or right padding by passing a start or end symbol to the bigrams, trigrams or ngrams */
console.log(
	NGrams.ngrams('some other words here for you', 4, '[start]', '[end]')
);
/* [
  [ '[start]', '[start]', '[start]', 'some' ],
  [ '[start]', '[start]', 'some', 'other' ],
  [ '[start]', 'some', 'other', 'words' ],
  [ 'some', 'other', 'words', 'here' ],
  [ 'other', 'words', 'here', 'for' ],
  [ 'words', 'here', 'for', 'you' ],
  [ 'here', 'for', 'you', '[end]' ],
  [ 'for', 'you', '[end]', '[end]' ],
  [ 'you', '[end]', '[end]', '[end]' ]
] */

// for only end symbols pass null for start param
console.log(NGrams.ngrams('some other words here for you', 4, null, '[end]'));
/* [
  [ 'some', 'other', 'words', 'here' ],
  [ 'other', 'words', 'here', 'for' ],
  [ 'words', 'here', 'for', 'you' ],
  [ 'here', 'for', 'you', '[end]' ],
  [ 'for', 'you', '[end]', '[end]' ],
  [ 'you', '[end]', '[end]', '[end]' ]
] */
