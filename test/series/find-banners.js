var assert = require("assert");
var API_KEY = process.env.TVDB_KEY;
var TVDBClient = require("../..");

describe("Find banners", function() {

    describe("Node callback API", function() {

        it("should return an array of the banners for the series with id \"246151\"", function(done) {
            var client = new TVDBClient(API_KEY);
            client.getBanners(246151, function(error, response) {
                assert.ifError(error);
                assert.equal("object", typeof response);
                done();
            });
        });
    });

    describe("Promise API", function() {

        it("should return an array of the banners for the series with id \"246151\"", function(done) {
            var client = new TVDBClient(API_KEY);
            client.getBanners(246151)
                .then(function(response) {
                    assert.equal("object", typeof response);
                })
                .catch(function(error) {
                    assert.ifError(error);
                })
                .done(done);
        });
    });
});
