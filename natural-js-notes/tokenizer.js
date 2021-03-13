// natural library for nlp work

// tokenizer
const natural = require('natural');
const {
	WordTokenizer,
	WordPunctTokenizer,
	SentenceTokenizer,
	SentenceTokenizerNew,
	CaseTokenizer,
	RegexpTokenizer,
	OrthographyTokenizer,
	TreebankWordTokenizer,
	AggressiveTokenizer,
} = natural;

// let's assume that we'll parse our input in the way
// we're currently parsing it on breadbakersfriend.com
// yielding { weight: num, unit: str, name: str }
const inputToTokenize = [
	'100% hi-gluten flour (sifted)',
	'Calumet (100% whole-kernel wheat flour)',
	'9-grain seed mix',
].join(' ');

// case tokenizer
const wordTokenizer = new WordTokenizer();
const wordTokenizedOutput = wordTokenizer.tokenize(inputToTokenize);
console.log('word tokenized output is: ', wordTokenizedOutput);

// word punct tokenizer
const wordPunctTokenizer = new WordPunctTokenizer();
const wordPunctTokenizedOutput = wordPunctTokenizer.tokenize(inputToTokenize);
console.log('word punct tokenized output is: ', wordPunctTokenizedOutput);

// sentence tokenizer
const sentenceTokenizer = new SentenceTokenizer();
const sentenceTokenizedOutput = sentenceTokenizer.tokenize(inputToTokenize);
console.log('sentence tokenized output is: ', sentenceTokenizedOutput);

// orthography tokenizer
const orthographyTokenizer = new OrthographyTokenizer({ language: 'en' });
const orthographyTokenizedOutput = orthographyTokenizer.tokenize(
	inputToTokenize
);
console.log('orthography tokenized output is: ', orthographyTokenizedOutput);

// sentence tokenizer new -- grammar/parser based
const sentenceTokenizerNew = new SentenceTokenizerNew();
const sentenceTokenizedNewOutput = sentenceTokenizerNew.tokenize(
	inputToTokenize
);
console.log(
	'sentence tokenized new (grammat/parser-based) output is: ',
	sentenceTokenizedNewOutput
);

// case tokenizer
const caseTokenizer = new CaseTokenizer();
const caseTokenizedOutput = caseTokenizer.tokenize(inputToTokenize);
console.log('case tokenized output is: ', caseTokenizedOutput);

// aggressive tokenizer
const aggressiveTokenizer = new AggressiveTokenizer();
const aggressiveTokenizedOutput = aggressiveTokenizer.tokenize(inputToTokenize);
console.log('aggressive tokenized output is: ', aggressiveTokenizedOutput);

// treebank tokenizer
const treebankWordTokenizer = new TreebankWordTokenizer();
const treebankWordTokenizedOutput = treebankWordTokenizer.tokenize(
	inputToTokenize
);
console.log('treebankWord tokenized output is: ', treebankWordTokenizedOutput);

module.exports = {
	wordTokenizer,
	wordPunctTokenizer,
	sentenceTokenizer,
	orthographyTokenizer,
	sentenceTokenizerNew,
	caseTokenizer,
	aggressiveTokenizer,
	treebankWordTokenizer,
};
