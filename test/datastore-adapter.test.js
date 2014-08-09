var Adapter = require("../lib/adapter");
var DatastoreAdapter = require("../lib/datastore-adapter");

describe("DatastoreAdapter", function() {

    it("should be a class", function() {
        DatastoreAdapter.should.be.a("function");
        DatastoreAdapter.prototype.constructor.should.equal(DatastoreAdapter);
    });

    describe("instance", function() {

        it("should be instance of DatastoreAdapter", function() {
            var adapter = new DatastoreAdapter();

            adapter.should.be.instanceof(DatastoreAdapter);
        });

        it("should be instance of Adapter", function() {
            var adapter = new DatastoreAdapter();

            adapter.should.be.instanceof(Adapter);
        });

    });

});

