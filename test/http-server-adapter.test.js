var Adapter = require("../lib/adapter");
var HttpServerAdapter = require("../lib/http-server-adapter");

describe("HttpServerAdapter", function() {

    it("should be a class", function() {
        HttpServerAdapter.should.be.a("function");
        HttpServerAdapter.prototype.constructor.should.equal(HttpServerAdapter);
    });

    it("should be subclass of Adapter", function() {
        Object.getPrototypeOf(HttpServerAdapter.prototype).constructor.should.equal(Adapter);
    });

    it("new operator should throw error", function() {
        HttpServerAdapter.should.throw(Error);
    });

});

