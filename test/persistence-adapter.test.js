var Adapter = require("../lib/adapter");
var PersistenceAdapter = require("../lib/persistence-adapter");

describe("PersistenceAdapter", function() {

    it("should be a class", function() {
        PersistenceAdapter.should.be.a("function");
        PersistenceAdapter.prototype.constructor.should.equal(PersistenceAdapter);
    });

    it("should be subclass of Adapter", function() {
        Object.getPrototypeOf(PersistenceAdapter.prototype).constructor.should.equal(Adapter);
    });

    it("new operator should throw error", function() {
        PersistenceAdapter.should.throw(Error);
    });

});

