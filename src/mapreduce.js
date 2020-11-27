// final

setup = require('./setup.js')
mapper = require('./mapper.js')
group = require('./group.js')
reducer = require('./reducer.js')

function mapReduce (friends) {
  let setupArr = setup(friends);
  let mappedArr = mapper(setupArr);
  let groupedObj = group(mappedArr);
  reducer(groupedObj);
  return groupedObj;
}


// driver code

var arr = [
  ['A', 'B'], ['A', 'C'], ['A', 'D'], ['B', 'C'],
  ['B', 'D'], ['B', 'E'], ['C', 'D'], ['C', 'E'],
  ['D', 'E']
];

console.log(mapReduce(arr));
