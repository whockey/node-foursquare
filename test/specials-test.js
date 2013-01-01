var assert = require('assert'),
  util = require('util'),
  testUtil = require('./utilities');

var SpecialsTest = function(config, accessToken) {
  var Foursquare = require('./../lib/node-foursquare')(config),
    logger = testUtil.getLogger('Specials-Test');

  return {
    search : function() {
      var test = "Foursquare.Specials.search(40.7, -74)";
      Foursquare.Specials.search("40.7", "-74", {}, accessToken, function (error, data) {
        if(error) {
          testUtil.reportError(logger, test, error.message);
        }
        else {
          try {
            testUtil.reportData(logger, test, util.inspect(data));
            assert.ok(data.specials);
            assert.ok(data.specials.count >= 0);
            assert.ok(data.specials.items);
            testUtil.reportOk(logger, test);
          } catch (error) {
            testUtil.reportError(logger, test, error);
          }
        }
      });
    }
  }
};

module.exports = SpecialsTest;
