var assert = require('assert'),
  util = require('util'),
  testUtil = require('./utilities');

var TipsTest = function(config, accessToken) {
  var Foursquare = require('./../lib/node-foursquare')(config),
    logger = testUtil.getLogger('Tips-Test');

  return {
    getTip : function() {
      var test = 'Foursquare.Tips.getTip(4b5e662a70c603bba7d790b4)';
      Foursquare.Tips.getTip('4b5e662a70c603bba7d790b4', accessToken, function (error, data) {
        if(error) {
          testUtil.reportError(logger, test, error.message);
        }
        else {
          try {
            testUtil.reportData(logger, test, util.inspect(data));
            assert.ok(data.tip);
            assert.equal(data.tip.id, '4b5e662a70c603bba7d790b4');
            testUtil.reportOk(logger, test);
          } catch (error) {
            testUtil.reportError(logger, test, error);
          }
        }
      });
    },
    search : function() {
      var test = 'Foursquare.Tips.search(40.7, -74)';
      Foursquare.Tips.search('40.7', '-74', {}, accessToken, function (error, data) {
        if(error) {
          testUtil.reportError(logger, test, error.message);
        }
        else {
          try {
            testUtil.reportData(logger, test, util.inspect(data));
            assert.ok(data.tips);
            testUtil.reportOk(logger, test);
          } catch (error) {
            testUtil.reportError(logger, test, error);
          }
        }
      });
    }
  }
};

module.exports = TipsTest;