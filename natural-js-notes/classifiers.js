const natural = require('natural');
const classifier = new natural.BayesClassifier();

// You can train the classifier on sample text. It will use reasonable defaults to tokenize and stem the text.
classifier.addDocument('i am long qqqq', 'buy');
classifier.addDocument("buy the q's", 'buy');
classifier.addDocument('short gold', 'sell');
classifier.addDocument('sell gold', 'sell');
classifier.addDocument('ibm shares up in premarket today', 'nasdaq');
classifier.addDocument(
	'tech sector explodes as bitcoin round $50k with an initial investment of $1.5 billion dollars by Tesla and enigmatic visionary Elon Musk',
	'nasdaq'
);

classifier.train();

console.log(
	// first input returns nasdaq
	// second input returns sell hopefully too
	classifier.classify(
		'silver is up in afterhours trading, futures rallies expected to crack 8% in premarket groundswell'
	),
	classifier.classify(
		"silver had quite the run, but the wind is dying down and if you're not short even premarket on a monday, i don't care how much crypto you own, the end of the silver rally will tear the rug out from under you so fast you'll feel a foot shorter as you were lopped off by commodities at the knees..."
	)
);
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

// so i could build functionality around listening for this event
// something simple like a loader while user uploads data for training purposes

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

// classifiers can also be persisted and recalled
// so that you can reuse a training

classifier.save('classifier.json', (err, classifier) => {
	// the classifier is saved to the classifier.json file
});

// to recall the saved classifier
natural.BayesClassifier.load('classifier.json', null, (err, classifier) => {
	console.log(classifier.classify('long SUNW'));
	console.log(classifier.classify('short SUNW'));
});

// classifiers can be serialized/deserialized
classifier.addDocument(['sell', 'gold'], 'sell');
classifier.addDocument(['buy', 'silver'], 'buy');

// serialize
const raw = JSON.stringify(classifier);
const restoredClassifier = natural.BayesClassifier.restore(JSON.parse(raw));
console.log(
	restoredClassifier.classify(
		'Sales are down this month, but futures are looking good especially on silver'
	)
);
