var resourcefuljs = require("../lib/resourcefuljs");
var Resource = require("../lib/resource");
var DatastoreAdapter = require("../lib/datastore-adapter");
var HttpAdapter = require("../lib/http-adapter");

describe("ResourcefulJS", function() {

    it("should return Resource class", function() {
        resourcefuljs.Resource.should.equal(Resource);
    });

    it("should return DatastoreAdapter class", function() {
        resourcefuljs.DatastoreAdapter.should.equal(DatastoreAdapter);
    });

    it("should return HttpAdapter class", function() {
        resourcefuljs.HttpAdapter.should.equal(HttpAdapter);
    });

});

