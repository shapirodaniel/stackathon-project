const drySweetenerTrainingData = [
	'sugar',
	'brown sugar',
	'powdered sugar',
	'10x sugar',
	"confectioner's sugar",
	'turbinado',
	'demerata',
	'sugarcane',
	'palm sugar',
	'invert sugar', // technically a syrup but too sweet to include
	'honey', // honey is too sweet and too hygroscopic to include in syrup designation
];

const syrupTrainingData = [
	'agave',
	'molasses',
	'barley malt syrup',
	'syrup',
	'high-fructose corn syrup',
	'karo',
	'golden syrup',
	'maple syrup',
];

const allSweetenerTrainingData = [...drySweetenerTrainingData].concat(
	syrupTrainingData
);

module.exports = {
	allSweetenerTrainingData,
	drySweetenerTrainingData,
	syrupTrainingData,
};
