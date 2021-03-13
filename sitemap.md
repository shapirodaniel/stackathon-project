the system is trained to recognize a class of recipe with a recommended production flow (like a series of blocks attached to the same length of string, but spaced out) and it takes as many recipes as it's given and uses that plus a measure of task-hours (cost per block) to maximize the continuity of blocks, which minimizes labor and maximizes output. the model takes some other params into consideration, every recipe has a canonical model that i do some nlp magic with to get metrics on the percent deviation and class of deviation in a recipe based on stemming and some other wacky stuff, then i update a model that tracks relative rates of fermentation related to time and temperature to potentially drastically alter a production workflow to accommodate a sudden increase in volume or a disruptive event that would force production to be squeezed adjacent to a particular day

how to get the classifier to recognize the canonical recipes?
first get a list of ingredients that can be taken as one of the canonical recipe classes

these are:

flour
liquid
salt
yeast
preferment
sweetener
inclusion

this will involve scraping for a particular class and training a natural.BayesClassifier()

```javascript

// first parse the recipe, get the recipe names, stem the user input, and group them in objects structured:

/*

  const {myDestructuredTokenizer} = require('natural');

  myDestructuredTokenizer

  let userInput; // this will be a POST req.body string or a contentEditable div that we grab via React refs on the frontend

  // tokenize -> these strings should be fed to the classifier as 1st param!
  let userTokens = natural.
  // stem -> these classes should be fed to the classifier as 2nd param!

  const stemmed =
  const ingredient = {
    name: 'parsed_input',
    class:
  }

*/

// broadly-speaking if the classifier can't assign a protected class assume it's an inclusion



// have a switch statement that routes the input by matching the stem to the class, which direct axios calls to routers operating at POST /api/recipe/class/:className
// this is where the magic happens!

// at that route the server calls addDocument on


const natural = require('natural');






const classifier = new natural.BayesClassifier();
let corpus, recipeClass; // training corpus, an array of strings

for (let i = 0; i < corpus.length; i++) {
	classifier.addDocument(corpus[i], recipeClass);
}

classifier.train();

// later, call the classifier with:
classifier.classify('input_string') // returns the recipeClass
classifier.getClassifications('input_string')
// this returns a set of matched classes and the associated value from the classifier
[
  {
    label: recipeClass,
    value: // a number,
  },
  ...
]

// listen for the classifier to have trained with a particular doc before saving, serializing, and persisting to the database
```
