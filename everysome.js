var goodUsers = [
    {id: 1 },
    {id: 2 },
    {id: 3 }
]
testAllValid = [
    { id: 2 },
    { id: 1 }
  ]






function checkUsersValid(goodUsers) {
    return function allUsersValid(testAllValid) {
        return goodUsers.some(function(testAllValid) {
            return goodUsers === testAllValid;
          });
    };
}
  module.exports = checkUsersValid