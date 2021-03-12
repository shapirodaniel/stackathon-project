/*

  text autocomplete with binary search trees
  that hold values determined by naturaljs computed values
  like edit distance

  hold them in a binary search tree
  and find the min edit distance path
  to suggest autocompletion

  every time a successful search query
  goes through, which would be when the user
  hits enter, this string is converted to a linked list
  and added to the model to continuously train it

  build these BSTs for autocomplete,
  sentiment analysis, and spelling reorder

  SPELLING
  use the DamerauLevenshtein distance
  heavily weighted toward transposition_cost
  to compute the spell-checking tree

  AUTOCOMPLETE
  use the tries model

*/
