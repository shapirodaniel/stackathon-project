// let's start by deciding the production lifecycle
// then decide the factors that will dominate each event in the production lifecycle
// then figure out how to weight them so that changing a factor results in the sort of changes i would expect to see in an actual production lifecycle IF i made those changes
// this is all recipe-based -- i'll consider temp to be a controllable variable since the user should know what temps to expect in their space -- and i'll also assume the user can control DDT through water temp and the mix

// the big events in production lifecycle of a bread item
// scaling will be assumed to be part of the "maintenance" reqs that will eat into task-hours devoted to production

/*
  mix
  bulk
  divide
  preshape / rest ?
  final shape
  final proof
*/

// allow user to specify what kind of mix -- offer a few options, each of which will introduce its own task-hour reqs on a per-loaf basis
/*
  hand: no mixer, big task-hour investment
  short-mix: moderate development with a longer bulk punctuated by stretch-and-folds, less task-hour investment
  intensive: full development, minimal handling during bulk, minimal task-hour investment
*/

// bulk time is dependent on DDT so have user offer a DDT or an ambient temp and an approx water temp (cold, sweet spot, warm)
/*
  cold: 5-6hr bulk
  sweet spot: 4hr bulk
  warm: 3-4hr bulk
*/

// divide takes as much time as there are people and assuming a skilled team that can output

/**************/

// let's just say that each factor in the recipe contributes to an overall score for each lifecycle
// this way we can just add up points and say that "country sour has the following score:
/*
  const score = {
    mix,
    bulk,
    shape,
    proof,
  }
  */
// and then we can say "user recipe is within x of mix, y of bulk, z of shape, t of proof" and make adjustments to the predictive model
// we will purposely ignore same-day constraints because it's too detrimental to production -- bread should be taken from mix->bake in the same production shift -- later we can add the possibility of same-day breads, but pretty much all production optimizations are PREDICATED on being able to spread production out over a multi-day process, as that's most efficient

// how to score stuff? use a function that weights things!
// but what to weight?

// pH, yeast motility, yeast concentration

// factor-by-factor:
// flour, liquid, salt, yeast, sweetener, dairy, preferment, inclusion

// flour -- subclasses will affect pH: more whole grain, LOWER expected pH (higher acidity)
// liquid -- more liquid increases yeast motility
// dairy -- RAISES pH
// salt -- WHEN salt is added affects the amount of time it takes to mix; HOW MUCH salt affects the speed of fermentation -- the window between 2-3% is optimal for bulks of approx 4 hours at < 78F, whereas salt at <%2 is conducive to rapid fermentation and >3% slows fermentation AND adds extensibility, which will likely add the need for a preshape/bench-rest cycle
// yeast -- more yeast, faster fermentation at all stages, and likewise less = less
// sweetener -- above 10% switch to osmotolerant yeast to avoid serious fermentation slow-down; above 30% fermentation will crawl and preferments should have been grown to accommodate the high osmotic pressure environment -- between 0-5% no measurable effect, between 5-10 there will be deleterious effect on fermentation
// preferment -- yeast concentration
// inclusion -- subclasses will affect yeast motility and pH -- dried fruits are low pH which will slow fermentation -- may want to recommend bumping a buffering ingredient weight or adding one entirely -- nuts and seeds are neutral pH, but highly hygroscopic

// temperature curve: 20-30C, +1C temp bumps activity by 7%

// alcohol +12% bp, slows fermentation

/* about pH */
