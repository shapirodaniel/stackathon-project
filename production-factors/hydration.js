// getHydration() takes in a recipe and returns the recipe hydration
const getHydration = recipe => {
	const getSum = type => recipe[type].reduce((sum, { bp }) => sum + bp, 0);
	const totalFlour = getSum('flour');
	const totalLiquid = getSum('liquid');
	return ((totalLiquid / totalFlour) * 100).toFixed(2);
};

module.exports = { getHydration };
