var PersistenceAdapter = require("../lib/persistence-adapter");
var DatastoreAdapter = require("../lib/datastore-adapter");

describe("DatastoreAdapter", function() {

    it("should be a class", function() {
        DatastoreAdapter.should.be.a("function");
        DatastoreAdapter.prototype.constructor.should.equal(DatastoreAdapter);
    });

    it("should be subclass of PersistenceAdapter", function() {
        Object.getPrototypeOf(DatastoreAdapter.prototype).constructor.should.equal(PersistenceAdapter);
    });

    it("new operator should throw error", function() {
        DatastoreAdapter.should.throw(Error);
    });

});

