const setup = require('./setup.js');
const mapper = require('./mapper.js');
const group = require('./group.js');
const reducer = require('./reducer.js');

module.exports = function mapReduce (friends) {
  let setupArr = setup(friends);
  let mappedArr = mapper(setupArr);
  let groupedObj = group(mappedArr);
  reducer(groupedObj);
  return groupedObj;
}
