module.exports = function mapper (setupArr) {
  let mappedFriends = new Array();

  for (let user in setupArr) {
    let friends = setupArr[user];

    friends.forEach(friend => {
      addPair(user, friend, friends, mappedFriends)
    });
  }

  return mappedFriends;
}

function addPair (user, friend, friends, mappedFriends) {
  let pair = getLexographicPair(user, friend);
  mappedFriends.push({ [pair]: friends });
}

function getLexographicPair (user, friend) {
  return user < friend ? user + friend : friend + user;
}
