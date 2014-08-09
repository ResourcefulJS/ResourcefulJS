var Resource = require("../lib/resource");

describe("Resource", function() {

    it("should be a class", function() {
        Resource.should.be.a("function");
        Resource.prototype.constructor.should.equal(Resource);
    });

    describe("instance", function() {

        it("should be instance of Resource", function() {
            var resource = new Resource();

            resource.should.be.instanceof(Resource);
        });

    });

});

