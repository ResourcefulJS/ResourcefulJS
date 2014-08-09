var Adapter = require("../lib/adapter");

describe("Adapter", function() {

    it("should be a class", function() {
        Adapter.should.be.a("function");
        Adapter.prototype.constructor.should.equal(Adapter);
    });

    describe("instance", function() {

        it("should be instance of Adapter", function() {
            var adapter = new Adapter();

            adapter.should.be.instanceof(Adapter);
        });

    });

});

