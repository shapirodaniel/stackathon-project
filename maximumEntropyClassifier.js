// // maximum entropy classifier
// /*
//    follows the principle of maximum entropy, which states that the probability distribution that best represents the current state of knowledge is the one with the largest entropy, in the context of precisely stated prior data (such as a proposition that expresses testable information).

//    from all the models that fit our training data, select the one which has the largest entropy
//    the distro follows the data it's "seen" but doesn't make assumptions beyond that
// */

// // not specific to nlp or any other application domain
// // quite free with regard to data structure it can be trained on
// // for training it needs a sample that consists of elements in two parts:
// // a: class of the element, b: the context of the element
// // the classifier will return the most probable class for a particular context

// // you must create your own specialization of the Element class
// // your element class should implement the generateFeatures method for inferring feature functions from the data
// // this is all pseudocode -- there will need to be actual classes, contexts, samples

// const MyElement = require('MyElementClass');
// const Context = require('Context');
// const Sample = require('Sample');

// const x = new MyElementClass('x', new Context('0'));

// // a sample is created from an array of elements
// const sample = new Sample();
// sample.addElement(x);

// // a class is a string
// // contexts can be as complex as you like as long as it can be serialized
// sample.save('sample.json', (err, sample) => {
// 	// do stuff
// });
// sample.load('sample.json', MyElement, (err, sample) => {
// 	// do more stuff
// });

// // features are functions that map elements to 0 or 1
// const Feature = require('Feature');

// const findB = input => {
// 	if (input.b === '0') return 1;
// 	return 0;
// };

// const feature = new Feature(findB, name, parameters);
// // name: string for name of feature function
// // parameters is an array of strings for the params of the feature function
// // the combination of name and parameters should uniquely distinguish features from each other
// // features that are added to a feature set are tested for uniqueness using these properties

// // create a feature set like this
// const FeatureSet = require('FeatureSet');
// const set = new FeatureSet();
// set.addFeature(findB, 'findB', ['0']);

// // in most casees feature functions are generated with closures
// // ex., generate feature functions in a loop that iterates an array
// const listOfTags = ['NN', 'DET', 'PREP', 'ADJ'];
// const featureSet = new FeatureSet();

// listOfTags.forEach(tag => {
// 	const isTag = input => {
// 		if (input.b.data.tag === tag) return 1;
// 		return 0;
// 	};

// 	featureSet.addFeature(new Feature(isTag, 'isTag', ['tag']));
// });

/*
  classifier needs the following parameter
  Classes: an array of classes (strings)
  Features: an array of feature functions
  Sample: a sample of elements for training the classifier
*/

// const Classifier = require('Classifier');
// const classifier = new Classifier(classes, featureSet, sample);

/* start training with: */
// const maxIterations = 100;
// const minImprovement = .01;
// const model = classifier.train(maxIterations, minImprovement);

/* training is finished when either maxIterations is reached or the improvement in likelihood (of the sample) becomes smaller than minImprovement -- it returns a probability distro that can be stored/retrieved */
// classifier.save('classifier.json', (err, c) => {
// 	if (err) console.log(err);
// 	else {
// 		/* continue using classifier */
// 	}
// });

// classifier.load('classifier.json', (err, c) => {
// 	if (err) console.log(err);
// 	else {
// 		/* use the classifier */
// 	}
// });

// training algo is based on Generalized Iterative Scaling
// in a nutshell:
/*
  GIS finds the conditionalExponentialModel weights that define a max entropy classifier
    for a given feature set and training corpus -- this procedure is guaranteed to converge on the correct weights:

  GIS places three constraints on the feature set

  feature values must be boolean, 0 or 1 ex.
  feature value list for every labeledText must have AT LEAST ONE feature with a value of 1
  sum of feature values for each labeledText must have the same value, ie

  the sum from i -> inf of featureDetector(labeledText) = correction constant

  in lay terms:

  * feature values are constrained to 0, 1

  * feature value list contains one exact feature match, at the minimum
  to do this we can add a single feature detector that always returns 1

  * there is one global standard for the sum of feature values -> AND,
  * each instance of the training corpus must conform to it
  to do this we can add a correction feature that equals:

  Correction feature = Correction constant (C) - Sigma:featureDetector(labeledText)

  In general, adding new features can change which classifier is the maximum entropy classifier for a given task. However, these two new features are completely dependent on the other features. They add no new information, and therefore place no new constraints on the classifier. As a result, they will not affect which classifier is the maximum entropy classifier.

  GIS begins by initializing each weight to 1 and iteratively updating them:

  weight := weight * ((sum of freq of labeledText in corpus * labeledText) * featureDetector(labeledText)) / (sum to num labeledTexts of classifier's estimated labeledText probability * featureDetector(labeledText)) ^ (1 / (Correction constant (C)))

  since this is costly, we can approximate:

  sum of
*/

// applying the classifier
// classifier can be used to classify contexts in two ways
// to get probabilities for all classes
const classifications = classifier.getClassifications(context);
classifications.forEach(classPlusProbability => {
	console.log(
		`Class ${classPlusProbability.label} has score ${classPlusProbability.value}`
	);
});

// this returns a map from classes to probabilities
// to get the highest scoring class
const myClass = classifier.classify(context);
console.log(myClass);

// ex.,
/*
  {
    "a":"x",
    "b": {
      "data": "0"
    }
  }
*/

/*
Application to POS tagging
A more elaborate example of maximum entropy modelling is provided for part of speech tagging. The following steps are taken to create a classifier and apply it to a test set:

A new element class POS_Element is created that has a word window and a tag window around the word to be tagged.
From the Brown corpus a sample is generated consisting of POS elements.
Feature functions are generated from the sample.
A classifier is created and trained.
The classifier is applied to a test set. Results are compared to a simple lexicon-based tagger.
*/
