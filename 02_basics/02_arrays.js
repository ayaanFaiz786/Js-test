const marvel_heroes = ['thor', 'ironman', 'spidermam'];
const dc_heroes = ['batman', 'superman', 'flash'];

// this will insert array inside marvel_heroes.
// marvel_heroes.push(dc_heroes);

// let allHeroes = marvel_heroes.concat(dc_heroes);

// spread operator to merge

// const allNewHeroes = [...marvel_heroes, ...dc_heroes];
// console.log(allNewHeroes);

const newArray = [1,2,3,[4,5,6], 7, [6, 7, [4,5]]];
// merge nested array to single array. Also you can provide depth as param. Infinity means all depth will be merged
// const flatArray = newArray.flat(Infinity);
// console.log(flatArray);

console.log(Array.isArray('faizan'));

// converts to array
console.log(Array.from('Faizan'));

// returns array
console.log(Array.of(1,2,3,4));