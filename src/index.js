const mapReduce = require('./map-reduce.js');

let arr = [
  ['A', 'B'], ['A', 'C'], ['A', 'D'], ['B', 'C'],
  ['B', 'D'], ['B', 'E'], ['C', 'D'], ['C', 'E'],
  ['D', 'E']
];

console.log(mapReduce(arr));
