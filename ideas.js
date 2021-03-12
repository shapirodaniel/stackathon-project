/*

  GOAL: automated production schedule generator with projected labor and output

  get the edit distance of user recipe to measure against canonical recipes
  that have known production schedules, and define a conversion factor that will
  compute the total minutes added/removed from various stages of
  the recipe in order to build a production workflow that maximizes
  output, measured in total dough produced, and minimizes labor

  as far as minimizing labor goes, we can measure on a per-task basis
  possibly weighting tasks

*/

/*

  basic flow would be something like this

  we're defining labor a bit differently here:
  rather than consider labor the hours on payroll
  we'll treat labor like an expected output metric
  that takes in staff and outputHours on a per staff basis
  and sums that number, using it for comparison

  (where labor = staff * outputHours)

  the production schedule functionality depends on whether
  labor can meet the schedule's demand

  so as a comparison estimate it's great and should be used
  to select the canonical model production schedule and graft it
  onto the user's proposedProductionSchedule, avoiding collisions
  between reserved blocks for major lifecycle events (more on that below)

  if user refuses, we should store their input as
  DIDNT_TAKE_ADVICE or something like that, so that
  recommendation engines aren't working against this data in the future

  if the user accepts, great!
  do all the stuff to get a user and store their recipe with them

  STEP 1
  user enters a recipe
  '100 flour 80 water 5 sugar 1 salt 3 yeast 10 wheat berries'

  STEP 2
  classifier identifies the canonical recipe group
  and selects the recipes with the highest score if there are more than that
  3, maybe 5 tops

  STEP 3
  the edit distance from the user's entered recipe to the canonical recipes is calculated
  the recipe with the smallest edit distance is considered the baseline

  STEP 4
  here we need to adjust our recipe's timing against the canonical one
  that means that we need to have provided timelines for each canonical recipe
  and we have to have mapped those timelines to relative ingredient weight combinations
  for example: if recipe is heavy on yeast our recipe will be done sooner
  another example: if the recipe is heavy on salt fermentation will drag at every step
  so we need a way of classifying ingredients and quantifying their effect on recipes

  STEP 5
  we identify major lifecycle events that require undivided-attention labor
  and we quantify how long they take, and build our production schedule around
  minimizing collisions to maximize the free labor -- to do this, we'll need to know
  how much labor is required for lifecycle events

  we'll need to classify these major events and identify them in the user-recipe's
  autogenerated production schedule so that when we start layering schedules
  in step 6 we avoid collisions

  we also assign a labor count to the schedule so that we track how many
  employee-hours it will take to complete our production list

  STEP 6
  we layer production schedules to maximize labor's output in production
  making sure to minimize collisions with major lifecycle events
  and we return the production schedule as a google calendar / other calender object

  STEP 7
  user specified production constraints like:
  max cooler capacity -- the main one for bread: no more room, no more bread!
  max mixer, oven capacities to measure load/unload timing for oven, full mix/deload time for mixer

  water meter y/n will be used to add a margin of error to calcs
  since we'll be able to assume the user can't get accurate water temperature?

*/

/*

  user will need an account
  they will want to store recipes and production schedules
  and it would be great if they had a way of informing the generator
  whether the build deviated from what was predicted
  so that the model could watch out for consistent inaccuracies in its predictions and adjust

  user should also be able to hook into a production calendar with this system
  so that supply orders can be automated -> this slashes labor as well


*/

/*

  additional functionality
  an invoice management system that alerts a manager
  when labor requirements will deviate from daily expected values
  if there is a large order on the horizon

  this will mitigate shortages in ordering as well
  and have a manual way of overriding automated order scheduling
  as well as placing orders manually



*/
