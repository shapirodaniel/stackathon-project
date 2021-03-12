# stackathon

## a project for fullstack academy

# topic: nlp-based ai for generating bakery production schedules according to recipe builds

### what problems does this system solve?

keeps kitchen from being caught flat-footed on large orders that disrupt the "usual" flow of production

keeps kitchen from experiencing bottlenecks in production by limiting collisions to those that are "handleable" by the labor allocated to a given production schedule -- since the schedule is built on top of the user's assertion that x task will require y labor, tasks that have been improperly quantified will be readily apparent and users will be able to adjust their expectations to maximize production and rework staffing to maximize productivity

### how does this system improve production that isn't experiencing problems?

oftentimes kitchens get into a groove and fail to maximize the productive capacity of their space and labor since everyone is comfortable -- the metrics this system provides allow the head baker to create reasonable expectations of productivity and allow for reasonable assumptions about labor and COGS, and will help the head baker identify low-revenue high-labor items to redline

### how is this going to work from a technical perspective?

we will take user inputted recipes
we will classify and match them to canonical recipes with known production timelines and labor requirements
we will make adjustments to the projected production schedule by calculating recipe deviation metrics and adjusting parameters that are affected by classes of ingredient

the key classes that will affect production schedules are

1. water: more water, easier yeast movement, faster fermentation
2. commercial yeast: more yeast, faster fermentation
3. preferment: more preferment, faster fermentation
4. salt: more salt, slower fermentation
5. type of flour: more whole grain, faster fermentation
6. hygroscopic ingredients: including sugar and any dessicants like inclusions with dried fruits and nuts -- these will heavily impact fermentation if appropriate amounts of liquid aren't added to compensate -- we should expect higher liquid bp when these sorts of inclusions are added -- this leaves out the class of soakers, a subclass of inclusions, which are overhydrated to compensate

to a lesser extent these classes will also affect timetables

7. fats: generally slow fermentation when they reach a certain bp
8. inclusions: if they're not strongly hygroscopic, water and whole-grain content (and any salt) will be the main factors -- so we can consider the effect of inclusions on production as a reflection of the macro qualities noted above (water, salt, type of flour) and use the bp of the inclusion to quantify how it will likely affect fermentation

### classes for quantifying ingredient impact on production

flour
liquid
salt
yeast
preferment
sweetener
inclusion

### next steps

figure out a projected production schedule and fermentation activity curve for each canonical recipe

define functions that modify the projected schedule and fermentation curve based on (ingredient) class deviations

define task-hours per production lifecycle event

define an algorithm that will "sort" my production schedule --> shouldn't be too bad, it will just need to place task-blocks in the most efficient way possible within a given schedule

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

`THIS is where it gets tricky`
-assuming users can stand the idea of ai suggesting recipe tweaks, they'll need to be able to abandon their idea of how production should work, and some changes like switching to a completely different levain build will be quite radical

-users should be able to ask "how could i improve sales, cut labor, compress or expand the production timeline of x product?" and get a quantifiable answer that demonstrates how recipe adjustments will impact production schedules, and what affect the new production schedule will have on cogs, labor, net revenue. these metrics should be charted and displayed in comparison format to show short and long term benefits

-users who trust the platform should be able to click a button that says "optimize my production schedule" and get a log of proposed changes to recipes that will maximize production output and minimize labor, when they click the button those changes are committed and a history of revisions is held so that users can revisit earlier production builds and get a kitchen history for auditing production efficiency and tradeoffs

-users should be able to generate production schedules at least 2 pay periods out to be able to schedule labor as efficiently as possible

-users should be able to "hook" into these generated production schedules and pipe results in a useful way to their inventory management system -- or, if they don't have one, the platform should offer suggested ordering patterns
