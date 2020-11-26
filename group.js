// step 3

function group (mappedArr) {
  var groupedFriends = new Object();

  mappedArr.forEach(object => combineFriends(groupedFriends, object));

  return groupedFriends;
}

function combineFriends (groupedFriends, object) {
  let pair = Object.keys(object)[0];
  let friends = Array.from(object[pair]);

  if (pair in groupedFriends) {
    groupedFriends[pair].push(friends);
  } else {
    groupedFriends[pair] = [friends];
  }
}
