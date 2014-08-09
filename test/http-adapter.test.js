var Adapter = require("../lib/adapter");
var HttpAdapter = require("../lib/http-adapter");

describe("HttpAdapter", function() {

    it("should be a class", function() {
        HttpAdapter.should.be.a("function");
        HttpAdapter.prototype.constructor.should.equal(HttpAdapter);
    });

    describe("instance", function() {

        it("should be instance of HttpAdapter", function() {
            var adapter = new HttpAdapter();

            adapter.should.be.instanceof(HttpAdapter);
        });

        it("should be instance of Adapter", function() {
            var adapter = new HttpAdapter();

            adapter.should.be.instanceof(Adapter);
        });

    });

});

