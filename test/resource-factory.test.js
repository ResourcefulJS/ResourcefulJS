var Resource = require("../lib/resource");
var ResourceFactory = require("../lib/resource-factory");

describe("ResourceFactory", function() {

    describe("#Define", function() {

        it("should return new class with name", function() {
            var DefinedResource = ResourceFactory.define("Foo");

            DefinedResource.name.should.equal("Foo");
        });

        describe("returns class, and new instance of that class", function() {

            it("should be instance of that class", function() {
                var DefinedResource = ResourceFactory.define("Foo");

                var resource = new DefinedResource();

                resource.should.be.an.instanceof(DefinedResource);
            });

            it("should be instance of Resource", function() {
                var DefinedResource = ResourceFactory.define("Foo");

                var resource = new DefinedResource();

                resource.should.be.an.instanceof(Resource);
            });

        });
    });

});

