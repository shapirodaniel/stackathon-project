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
