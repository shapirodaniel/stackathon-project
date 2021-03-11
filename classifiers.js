const natural = require('natural');
const classifier = new natural.BayesClassifier();

// You can train the classifier on sample text. It will use reasonable defaults to tokenize and stem the text.
classifier.addDocument('i am long qqqq', 'buy');
classifier.addDocument("buy the q's", 'buy');
classifier.addDocument('short gold', 'sell');
classifier.addDocument('sell gold', 'sell');

classifier.train();

console.log(classifier.classify('i am short silver')); // return 'sell'
console.log(classifier.classify('i am long copper')); // return 'buy'

// you have access to the set of matched classes
// and the associated value from the classifier
console.log(classifier.getClassifications('i am long copper'));

// yields:
/*
  [
    { label: 'buy', value: 0.39999999999999997 },
    { label: 'sell', value: 0.19999999999999998 }
  ]
 */

// classifier can be trained with / can classify arrays of tokens, strings, or any mixture of the two -- arrays let you use entirely custom data with your own tokenization/stemming, if you choose to implement it
classifier.addDocument(['sell', 'gold'], 'sell');

/* The training process can be monitored by subscribing to the event trainedWithDocument that’s emitted by the classifier, this event’s emitted each time a document is finished being trained against: */

classifier.events.on('trainedWithDocument', obj => {
	console.log(obj);
	/*
  {
    total: // total docs being trained against
    index: // idx/num of doc that's just been trained against
    doc: {...} the doc that's just been indexed
  }

  */
});
