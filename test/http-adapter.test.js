var Adapter = require("../lib/adapter");
var HttpAdapter = require("../lib/http-adapter");

describe("HttpAdapter", function() {

    it("should be a class", function() {
        HttpAdapter.should.be.a("function");
        HttpAdapter.prototype.constructor.should.equal(HttpAdapter);
    });

    it("should be subclass of Adapter", function() {
        Object.getPrototypeOf(HttpAdapter.prototype).constructor.should.equal(Adapter);
    });

    it("new operator should throw error", function() {
        HttpAdapter.should.throw(Error);
    });

});

