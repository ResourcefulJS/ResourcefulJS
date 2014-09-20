var Resource = require("../lib/resource");

describe("Resource", function() {

    it("should be a class", function() {
        Resource.should.be.a("function");
        Resource.prototype.constructor.should.equal(Resource);
    });

    it("new operator should throw error", function() {
        Resource.should.throw(Error);
    });

    describe("#register", function() {

        var FooResource = Resource.register("Foo");

        it("should return a class", function() {
            FooResource.should.be.a("function");
            FooResource.prototype.constructor.should.equal(FooResource);
        });

        it("should return subclass of Resource", function() {
            Object.getPrototypeOf(FooResource.prototype).constructor.should.equal(Resource);
        });

        it("should return class with resource name as the 'name' attribute", function() {
            FooResource.name.should.equal("Foo");
        });

        //TODO maybe check class and prototype properties exists (new, save, $save etc)

    });

    describe("DefinedResource", function() {

        describe("new operator", function() {
            var FooResource = Resource.register("Foo");

            it("should delegates return of #new", sinon.test(function() {
                var expectedResource = Object.create(FooResource.prototype);
                this.stub(FooResource, "new", function() {
                    return expectedResource;
                });

                var resource = new FooResource();

                resource.should.equal(expectedResource);
            }));

            it("should delegate properties argument to #new", sinon.test(function() {
                var givenProperties;
                this.stub(FooResource, "new", function(properties) {
                    givenProperties = properties;
                });

                var inputProperties = {
                    test: 123
                };
                new FooResource(inputProperties);

                givenProperties.should.eql(inputProperties);
            }));

            it("should delegate all arguments to #new", sinon.test(function() {
                var givenArgs;
                this.stub(FooResource, "new", function() {
                    givenArgs = arguments;
                });

                new FooResource(123, 456);

                givenArgs = Array.prototype.splice.call(givenArgs, 0); // convert arguments "array-like" to array
                givenArgs.should.eql([123, 456]);
            }));

        });

        describe("#new", function() {
            var FooResource = Resource.register("Foo");

            it("should return instance of defined resource", function() {
                var fooInstance = FooResource.new();

                fooInstance.should.be.an.instanceof(FooResource);
            });

            it("should merge input properties to new instance", function() {
                var inputProperties = {
                    test: 123
                };

                var fooInstance = FooResource.new(inputProperties);

                fooInstance.should.include(inputProperties);
            });

        });

        describe("#save", function() {
            var FooResource = Resource.register("Foo");

            it("should return instance of defined resource", function() {
                var savedInstance = FooResource.save({});

                savedInstance.should.be.an.instanceof(FooResource);
            });

            it("should return same instance if input is the defined resource", function() {
                var inputInstance = FooResource.new();

                var savedInstance = FooResource.save(inputInstance);

                savedInstance.should.equal(inputInstance);
            });

            it("should return instance if input is properties", function() {
                var savedInstance = FooResource.save({});

                savedInstance.should.be.an.instanceof(FooResource);
            });

            it("should merge input properties to new instance", function() {
                var inputProperties = {
                    test: 123
                };

                var savedInstance = FooResource.save(inputProperties);

                savedInstance.should.include(inputProperties);
            });

        });

        describe("instance", function() {
            var FooResource = Resource.register("Foo");
            var fooInstance = new FooResource();

            it("should be instance of that class", function() {
                fooInstance.should.be.an.instanceof(FooResource);
            });

            it("should be instance of Resource", function() {
                fooInstance.should.be.an.instanceof(Resource);
            });
        });

    });

});

