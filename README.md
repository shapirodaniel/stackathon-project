# stackathon

## a project for fullstack academy

# topic: nlp-based ai for generating bakery production schedules according to recipe builds

## Watch the demo here: [An NLP-based Recipe Classifier](https://www.youtube.com/watch?v=gGb3Wp1s33w&ab_channel=dasha)

### in a nutshell:

-this system brings agile methodology to the kitchen to solve the age-old problem of how to minimize labor and maximize output while holding production quality steady WITHOUT overstressing labor -- these are THE key performance indicators for the likely success of a bakery

-bakeries operate on terrible margins -- 6% profit year-over-year, 96% mid-week labor percentage, and rampant waste/loss of product make it highly unlikely that a bakery will survive the first two years of existence

-the easiest way to make money is to save money. calories in, calories out -- the profitability and stability of a bakery is directly correlated to its ability to maximize production and minimize labor. everything else is window-dressing -- you can market all you want but your customer retention will be terrible if you can't produce high-quality goods profitably and consistently.

### what problems does this system solve?

-keeps kitchen from being caught flat-footed on large orders that disrupt the "usual" flow of production

-keeps kitchen from experiencing bottlenecks in production by limiting collisions to those that are "handleable" by the labor allocated to a given production schedule -- since the schedule is built on top of the user's assertion that x task will require y labor, tasks that have been improperly quantified will be readily apparent and users will be able to adjust their expectations to maximize production and rework staffing to maximize productivity

### how does this system improve production that isn't experiencing problems?

-oftentimes kitchens fail to maximize the productive capacity of their space and labor since everyone is comfortable with "the way things work here" -- the metrics this system provides allow the head baker to create reasonable expectations of productivity and allow for reasonable assumptions about labor and COGS, and will help the head baker identify low-revenue high-labor items to redline, low-productivity laborers to address, high-performing laborers who will be able to create greater output on the same number of assigned task-hours

### how is this going to work from a technical perspective?

-we will take user inputted recipes
-we will classify and match them to canonical recipes with known production timelines and labor requirements
-we will make adjustments to the projected production schedule by calculating recipe deviation metrics and adjusting parameters that are affected by classes of ingredient

-the key classes that will affect production schedules are

1. water: more water, easier yeast movement, faster fermentation
2. commercial yeast: more yeast, faster fermentation
3. preferment: more preferment, faster fermentation
4. salt: more salt, slower fermentation
5. type of flour: more whole grain, faster fermentation
6. hygroscopic ingredients: including sugar and any desiccants like inclusions with dried fruits and nuts -- these will heavily impact fermentation if appropriate amounts of liquid aren't added to compensate -- we should expect higher liquid bp when these sorts of inclusions are added -- this leaves out the class of soakers, a subclass of inclusions, which are overhydrated to compensate

-to a lesser extent these classes will also affect timetables

7. fats: generally slow fermentation when they reach a certain bp
8. inclusions: if they're not strongly hygroscopic, water and whole-grain content (and any salt) will be the main factors -- so we can consider the effect of inclusions on production as a reflection of the macro qualities noted above (water, salt, type of flour) and use the bp of the inclusion to quantify how it will likely affect fermentation

### classes for quantifying ingredient impact on production

-flour
-liquid
-salt
-yeast
-preferment
-sweetener
-inclusion

-some of these fields will be independent variables in the model -- these are the ingredientClasses that don't affect fermentation in important ways, since we can assume any recipe that deviates significantly from the canonical recipe will move "toward" another canonical recipe -- this will allow us to avoid the trap of overspecifying the model -- eg, we don't need to know the effect adding butter will have to a country sourdough, since it won't speed-up/slow-down fermentation -- the strength of the dough will be assumed to be a constant outcome, ie we will assume skilled production labor that can develop dough strength in the given production window -- and if we do modify enough ingredientClasses in a recipe, it will most likely "move" into alignment with another canonical model

-some fields will affect the "dough at work" parameters -- a much higher relative liquid content will require more task-hours in developing dough strength during the mix and bulk, and will likely require a pre-shape/bench-rest cycle -- the real impact of this system will come from being able to identify a recipe's relative production needs, compare the task-hours cost across recipe modifications, and inform the user of what they're giving vs getting out of a particular recipe wrt their production workflow!

-PEP will be a good place to explain/describe how this whole process works

-if there is a recipe that "falls through the cracks" -- one that doesn't align to any significant degree with any existing canonical model -- this is an edge case that will be handled in later project iterations -- these would be good candidates for a user prompt to explore bringing the recipe into alignment with known models, or better yet, bring up a list of recipe classifications and ask the user to CHOOSE which one this recipe aligns with! then, we can define "adjacent" recipeClasses that are user-determined: say a user says, "this dinner roll is basically a brioche" but it doesn't contain any eggs -- a good use case would be for vegan breads or gluten-free breads -- we could create a set of "brioche-like" breads that are able to be classified as brioche, but use a submodel derived from this "x-like" set. the submodel will produce a production schedule that's potentially significantly removed from the canonical model's production schedule; this allows us to "have our cake and eat it too" by classifying breads according to what users say the classifications mean to them, but still allowing us to logically group and generate production schedules by recipeClass

-do the minimal amount of sifting necessary to be able to quantify the overall affect of having more or less of one kind of ingredient than the canonical model specifies -- for instance, we should expect a country sour that swaps the proportions of wheat and rye to ferment a good deal faster, so we should be able to quantify the effect of having more rye than the canonical model at each of the "dough at rest" stages (the fermentation stages)

-most factors can be evaluated purely by comparing baker's math in the convertedRecipe to the canonical recipe -- those that differ qualitatively need to have their effects measured and silo'd and applied to the full production schedule calculation

-for example, if the user recipe is an up/down match to a canonical in all top-level ingredientClass comparisons -- eg hydration as a function of total flour and liquids -- the subclasses will be the differentiators if ingredient quantities differ

### next steps

-figure out a projected production schedule and fermentation activity curve for each canonical recipe

-define functions that modify the projected schedule and fermentation curve based on (ingredient) class deviations

-define task-hours per production lifecycle event

-define an algorithm that will "sort" my production schedule --> shouldn't be too bad, it will just need to place task-blocks in the most efficient way possible within a given schedule

### user interface

-users should have access to the dynamic baker's math calculator

-users should have a trove of recipes that can be loaded into a given production schedule

-users' recipes should be CONNECTED to the production schedule: changes in the recipe will affect production!

-users should be able to set a desired labor number INDEPENDENT of an actual schedule -- this will encourage users to think about production not in terms of bodies on the floor but rather the production pipeline and ITS needs

-users should be able to use a slider to add/remove labor hours to/from a given production schedule

-users should be able to define what PERCENTAGE of available labor will be wholly devoted to the production schedule so that maintenance, prep, and receiving tasks are accounted for -- example, if the user knows that the kitchen staff will be required to spend x task-hours on y unrelated task to production the schedule will be built to reflect these constraints

### eventually ...

-user inputted recipes should be used as training data for a classifier, so that recipes can be more finely sifted and identified

-users should be able to override suggested task-hours for a given production task and assert their own

-users should be able to clearly state what time and temperature production will take place at, so that production builds can be adjusted to reflect these factors -- these should be sliders or easily-manipulated text fields

-users should be alerted when strong deviations from canonicals will result in poor production schedule builds, and users should receive suggestions on how to update a recipe to maximize output

-`THIS is where it gets tricky`
-assuming users can stand the idea of ai suggesting recipe tweaks, they'll need to be able to abandon their idea of how production should work, and some changes like switching to a completely different levain build will be quite radical

-users should be able to ask "how could i improve sales, cut labor, compress or expand the production timeline of x product?" and get a quantifiable answer that demonstrates how recipe adjustments will impact production schedules, and what affect the new production schedule will have on cogs, labor, net revenue. these metrics should be charted and displayed in comparison format to show short and long term benefits

-users who trust the platform should be able to click a button that says "optimize my production schedule" and get a log of proposed changes to recipes that will maximize production output and minimize labor, when they click the button those changes are committed and a history of revisions is held so that users can revisit earlier production builds and get a kitchen history for auditing production efficiency and tradeoffs

-users should be able to generate production schedules at least 2 pay periods out to be able to schedule labor as efficiently as possible

-users should be able to "hook" into these generated production schedules and pipe results in a useful way to their inventory management system -- or, if they don't have one, the platform should offer suggested ordering patterns

### even more eventually ...

-user inputted reactions to production builds' "correctness" should be gathered in order to inform the time-temperature model that are used to create projected production schedules
