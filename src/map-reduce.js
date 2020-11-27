// final

const setup = require('./setup.js');
const mapper = require('./mapper.js');
const group = require('./group.js');
const reducer = require('./reducer.js');

function mapReduce (friends) {
  let setupArr = setup(friends);
  let mappedArr = mapper(setupArr);
  let groupedObj = group(mappedArr);
  reducer(groupedObj);
  return groupedObj;
}


// driver code

let arr = [
  ['A', 'B'], ['A', 'C'], ['A', 'D'], ['B', 'C'],
  ['B', 'D'], ['B', 'E'], ['C', 'D'], ['C', 'E'],
  ['D', 'E']
];

console.log(mapReduce(arr));
