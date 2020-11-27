// step 1

module.exports = function setup (arr) {
  let friends = new Object();

  arr.forEach(pair => addPair(friends, pair));

  return friends;
}

function addPair (friends, pair) {
  let user = pair[0];
  let otherUser = pair[1];
  addFriends(friends, user, otherUser);
  addFriends(friends, otherUser, user);
}

function addFriends (friends, user, otherUser) {
  if (user in friends) {
    friends[user].push(otherUser);
  } else {
    friends[user] = [otherUser];
  }
}
