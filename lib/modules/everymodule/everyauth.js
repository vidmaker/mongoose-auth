var mongoose = require('mongoose'),
    Promise = require('everyauth').Promise;

// Defaults

module.exports = {
  findUserById: function (userId, fn) {
    mongoose.model('User').findById(userId, fn);
  }
};
