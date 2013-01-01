var assert = require('assert'),
  util = require('util'),
  testUtil = require('./utilities');

var Checkins = function(config, accessToken) {
  var Foursquare = require('./../lib/node-foursquare')(config),
    logger = testUtil.getLogger('Checkins-Test');

  return {
    getCheckin : function() {
      var test = 'Foursquare.Checkins.getCheckin(502bcde16de4146b7f104ac6)';
      Foursquare.Checkins.getCheckin('502bcde16de4146b7f104ac6', null, accessToken, function (error, data) {
        if(error) {
          testUtil.reportError(logger, test, error.message);
        }
        else {
          try {
            testUtil.reportData(logger, test, util.inspect(data));
            assert.ok(data.checkin);
            assert.equal(data.checkin.id, '502bcde16de4146b7f104ac6');
            assert.equal(data.checkin.type, 'checkin');
            testUtil.reportOk(logger, test);
          } catch (error) {
            testUtil.reportError(logger, test, error);
          }
        }
      });
    },
  
    getRecentCheckins : function() {
      var test = 'Foursquare.Checkins.getRecentCheckins()';
      Foursquare.Checkins.getRecentCheckins(null, accessToken, function (error, data) {
        if(error) {
          testUtil.reportError(logger, test, error.message);
        }
        else {
          try {
            testUtil.reportData(logger, test, util.inspect(data));
            assert.ok(data.recent);
            testUtil.reportOk(logger, test);
          } catch (error) {
            testUtil.reportError(logger, test, error);
          }
        }
      });
    },

    getLikes : function() {
      var test = 'Foursquare.Checkins.getLikes(502bcde16de4146b7f104ac6)';
      Foursquare.Checkins.getLikes('502bcde16de4146b7f104ac6', accessToken, function (error, data) {
        if(error) {
          testUtil.reportError(logger, test, error.message);
        }
        else {
          try {
            testUtil.reportData(logger, test, util.inspect(data));
            assert.ok(data.likes);
            assert.ok(logger, data.likes.count >= 0);
            assert.ok(logger, data.likes.groups);
            testUtil.reportOk(logger, test);
          } catch (error) {
            testUtil.reportError(logger, test, error);
          }
        }
      });
    }
  }
};

module.exports = Checkins;
