var Adapter = require("../lib/adapter");
var DatastoreAdapter = require("../lib/datastore-adapter");

describe("DatastoreAdapter", function() {

    it("should be a class", function() {
        DatastoreAdapter.should.be.a("function");
        DatastoreAdapter.prototype.constructor.should.equal(DatastoreAdapter);
    });

    it("should be subclass of Adapter", function() {
        Object.getPrototypeOf(DatastoreAdapter.prototype).constructor.should.equal(Adapter);
    });

    it("new operator should throw error", function() {
        DatastoreAdapter.should.throw(Error);
    });

});

