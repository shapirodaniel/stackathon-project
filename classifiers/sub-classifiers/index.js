// each sub-classifier will be available at /api/classifiers/:ingredientClass
// ex., flours at /api/classifiers/flour

const eggClassifier = require('./egg');
const flourClassifier = require('./flour');
const inclusionClassifier = require('./inclusion');
const liquidClassifier = require('./liquid');
const sweetenerClassifier = require('./sweetener');
const yeastClassifier = require('./yeast');

module.exports = {
	eggClassifier,
	flourClassifier,
	inclusionClassifier,
	liquidClassifier,
	sweetenerClassifier,
	yeastClassifier,
};
