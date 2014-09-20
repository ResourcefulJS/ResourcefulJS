var Resource = require("../lib/resource");
var ResourceFactory = require("../lib/resource-factory");

describe("ResourceFactory", function() {

    describe("#define", function() {

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

            describe("#get", function() {

                it("should be instance of Resource", function() {
                    var DefinedResource = ResourceFactory.define("Foo");

                    DefinedResource._datastoreAdapter = {
                        findResourceById: function(id) {
                            return new DefinedResource();
                        }
                    };

                    var resource = DefinedResource.get(1);

                    resource.should.be.an.instanceof(DefinedResource);
                });

        });

        });
    });

});

