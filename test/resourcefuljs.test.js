var resourcefuljs = require("../lib/resourcefuljs");
var Resource = require("../lib/resource");
var DatastoreAdapter = require("../lib/datastore-adapter");
var HttpServerAdapter = require("../lib/http-server-adapter");

describe("ResourcefulJS", function() {

    it("should return Resource class", function() {
        resourcefuljs.Resource.should.equal(Resource);
    });

    it("should return DatastoreAdapter class", function() {
        resourcefuljs.DatastoreAdapter.should.equal(DatastoreAdapter);
    });

    it("should return HttpServerAdapter class", function() {
        resourcefuljs.HttpServerAdapter.should.equal(HttpServerAdapter);
    });

});

