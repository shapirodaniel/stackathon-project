/* Term Frequency-Inverse Document Frequency, or tf-idf,
is implemented to determine how important a word (or words) is/are
to a document relative to a corpus
*/

/*
  formulas for tf and idf:

  tf(t, d) is a raw count: just count of the term in document

  idf(t, D) uses: 1 + ln(N / (1 + n_t)), where:

  N = num documents
  n_t = num documents in which term appears
  1 + handles edge case where n_t is 0
*/

const natural = require('natural');
const { TfIdf } = natural;
const tfidf = new TfIdf();

// each doc is stored in tfidf array
// reference them by idx num in .tfidfs() calls
tfidf.addDocument('this document is about node.'); // ref with 0
tfidf.addDocument('this document is about ruby.'); // 1
tfidf.addDocument('this document is about ruby and node.'); // 2
tfidf.addDocument('this document is about node. it has node examples.'); // 3

// about node?
console.log('node ---------------');
tfidf.tfidfs('node', (i, measure) => {
	console.log(`document #${i} is ${measure}`);
});

// about ruby?
console.log('ruby ---------------');
tfidf.tfidfs('ruby', (i, measure) => {
	console.log(`document #${i} is ${measure}`);
});

// approach can also be applied to individual docs
console.log(tfidf.tfidf('node', 0));
console.log(tfidf.tfidf('node', 1));

// TfIdf instances can load docs from disk files
tfidf.addFileSync('tfidf_data/one.txt');
tfidf.addFileSync('tfidf_data/two.txt');
console.log(tfidf.tfidf('language', 4));
console.log(tfidf.tfidf('language', 5));

// returns:
/*
3.386294361119891 // 2 instances of language
1.6931471805599454 // 1 instance of language
 */
