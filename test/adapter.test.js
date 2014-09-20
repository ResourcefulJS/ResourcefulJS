var Adapter = require("../lib/adapter");

describe("Adapter", function() {

    it("should be a class", function() {
        Adapter.should.be.a("function");
        Adapter.prototype.constructor.should.equal(Adapter);
    });

    it("new operator should throw error", function() {
        Adapter.should.throw(Error);
    });

});

