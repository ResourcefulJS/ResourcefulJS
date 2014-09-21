var PersistenceAdapter = require("../lib/persistence-adapter");
var HttpClientAdapter = require("../lib/http-client-adapter");

describe("HttpClientAdapter", function() {

    it("should be a class", function() {
        HttpClientAdapter.should.be.a("function");
        HttpClientAdapter.prototype.constructor.should.equal(HttpClientAdapter);
    });

    it("should be subclass of PersistenceAdapter", function() {
        Object.getPrototypeOf(HttpClientAdapter.prototype).constructor.should.equal(PersistenceAdapter);
    });

    it("new operator should throw error", function() {
        HttpClientAdapter.should.throw(Error);
    });

});

