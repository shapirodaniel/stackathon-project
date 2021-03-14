# first time i ran the classifier

```javascript
// classified recipe
 {
  flour: [
    { name: 'bread flour', bp: 50 },
    { name: 'ap flour', bp: 15 },
    { name: 'whole wheat flour', bp: 25 },
    { name: 'rye flour', bp: 10 }
  ],
  liquid: [ { name: 'water', bp: 85 } ],
  egg: [ { name: 'levain', bp: 20 } ],
  salt: [ { name: 'salt', bp: 2 } ]
}
// canonicalClassifiedRecipe:
 {
  flour: [
    { name: 'bread flour', bp: 35 },
    { name: 'ap flour', bp: 30 },
    { name: 'whole wheat flour', bp: 25 },
    { name: 'rye flour', bp: 10 }
  ],
  liquid: [ { name: 'water', bp: 80 } ],
  egg: [ { name: 'levain', bp: 15 } ],
  salt: [ { name: 'salt', bp: 2.5 } ]
}
```

# after a big of debugging, mostly to check for undefined inputs along the way, we've got a working classifier! minus the levain -> egg connection ...

```javascript
//userIngredientList:
 [
  { 'bread flour': 50 },
  { 'ap flour': 15 },
  { 'whole wheat flour': 25 },
  { 'rye flour': 10 },
  { water: 85 },
  { levain: 20 },
  { salt: 2 }
]
//canonicalIngredientList:
 [
  { 'bread flour': 35 },
  { 'ap flour': 30 },
  { 'whole wheat flour': 25 },
  { 'rye flour': 10 },
  { water: 80 },
  { levain: 15 },
  { salt: 2.5 }
]
// userClassifiedRecipe:
 {
  flour: [
    { name: 'bread flour', bp: 50 },
    { name: 'ap flour', bp: 15 },
    { name: 'whole wheat flour', bp: 25 },
    { name: 'rye flour', bp: 10 }
  ],
  liquid: [ { name: 'water', bp: 85 } ],
  egg: [ { name: 'levain', bp: 20 } ],
  salt: [ { name: 'salt', bp: 2 } ]
}
// canonicalClassifiedRecipe:
 {
  flour: [
    { name: 'bread flour', bp: 35 },
    { name: 'ap flour', bp: 30 },
    { name: 'whole wheat flour', bp: 25 },
    { name: 'rye flour', bp: 10 }
  ],
  liquid: [ { name: 'water', bp: 80 } ],
  egg: [ { name: 'levain', bp: 15 } ],
  salt: [ { name: 'salt', bp: 2.5 } ]
}
// diff:
 { pH: 0, yeastMotility: -14.875, yeastConcentration: 0 }
```

# after realizing that i'd never specified a training corpus for preferements

```javascript
// userClassifiedRecipe:
 {
  flour: [
    { name: 'bread flour', bp: 50 },
    { name: 'ap flour', bp: 15 },
    { name: 'whole wheat flour', bp: 25 },
    { name: 'rye flour', bp: 10 }
  ],
  liquid: [ { name: 'water', bp: 85 } ],
  preferment: [ { name: 'levain', bp: 20 } ],
  salt: [ { name: 'salt', bp: 2 } ]
}
// canonicalClassifiedRecipe:
 {
  flour: [
    { name: 'bread flour', bp: 35 },
    { name: 'ap flour', bp: 30 },
    { name: 'whole wheat flour', bp: 25 },
    { name: 'rye flour', bp: 10 }
  ],
  liquid: [ { name: 'water', bp: 80 } ],
  preferment: [ { name: 'levain', bp: 15 } ],
  salt: [ { name: 'salt', bp: 2.5 } ]
}
// diff:
 { pH: 0, yeastMotility: -19.875, yeastConcentration: -5 }
```

# at this point it looks like scores are negative when there's a positive correlation so i'll swap the order of diffing by changing to userScore - canonicalScore

```javascript
// diff:
 { pH: 0, yeastMotility: 19.875, yeastConcentration: 5 }
```
