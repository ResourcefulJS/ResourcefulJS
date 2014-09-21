var Resource = require("../lib/resource");
var TestPersistenceAdapter = require("./test-persistence-adapter");

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

            it("should delegate return of #new", sinon.test(function() {
                var expectedResource = Object.create(FooResource.prototype);
                this.stub(FooResource, "new").returns(expectedResource);

                var resource = new FooResource();

                resource.should.equal(expectedResource);
            }));

            it("should delegate properties argument to #new", sinon.test(function() {
                var stub = this.stub(FooResource, "new");

                var inputProperties = {
                    test: 123
                };
                new FooResource(inputProperties);

                stub.should.have.been.calledWithExactly(inputProperties);
            }));

            it("should delegate all arguments to #new", sinon.test(function() {
                var stub = this.stub(FooResource, "new");

                new FooResource(123, "test");

                stub.should.have.been.calledWithExactly(123, "test");
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
            var FooResource = Resource.register("Foo", {persistenceAdapter: TestPersistenceAdapter});

            it("should return instance of defined resource", function() {
                var savedInstance = FooResource.save();

                savedInstance.should.be.an.instanceof(FooResource);
            });

            describe("input is defined resource", function() {

                it("should return same instance", sinon.test(function() {
                    var inputInstance = FooResource.new();

                    this.stub(TestPersistenceAdapter, "save").returns({ test: 123 });

                    var savedInstance = FooResource.save(inputInstance);

                    savedInstance.should.equal(inputInstance);
                }));

                it("should call persistance adapter with defined resource from input", sinon.test(function() {
                    var inputInstance = FooResource.new();

                    var stub = this.stub(TestPersistenceAdapter, "save");

                    FooResource.save(inputInstance);

                    stub.should.have.been.calledWithExactly(inputInstance);
                }));

            });

            describe("input is properties object", function() {

                it("should return instance", function() {
                    var savedInstance = FooResource.save({});

                    savedInstance.should.be.an.instanceof(FooResource);
                });

                it("should call persistance adapter with instance of defined resource", sinon.test(function() {
                    var stub = this.stub(TestPersistenceAdapter, "save");

                    FooResource.save({ test: 123});

                    stub.should.have.been.calledWithExactly(sinon.match.instanceOf(FooResource));
                }));

                it("should merge input properties to new instance before save to persistence adapter", sinon.test(function() {
                    var inputProperties = {
                        test: 123
                    };
                    var stub = this.stub(TestPersistenceAdapter, "save");

                    FooResource.save(inputProperties);

                    stub.should.have.been.calledWithExactly(sinon.match(inputProperties));
                }));

            });

//            it("should update instance with info returned from persistence adapter", sinon.test(function() {
//                var fooInstance = FooResource.new({
//                    test: 123
//                });
//
//                var returnedInfo = {
//                    test: 345,
//                    bar: "test"
//                };
//
//                this.stub(TestPersistenceAdapter, "save").returns(returnedInfo);
//
//                FooResource.save(fooInstance);
//
//                fooInstance.should.include(returnedInfo);
//            }));

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

            describe("#$save", function() {

                it("should delegate to resource class save function", sinon.test(function() {
                    var stub = this.stub(FooResource, "save");

                    fooInstance.$save();

                    stub.should.have.been.called;
                }));

                it("should delegate instance to class save function", sinon.test(function() {
                    var stub = this.stub(FooResource, "save");

                    fooInstance.$save();

                    stub.should.have.been.calledWithExactly(fooInstance);
                }));

                it("should delegate return from class save function", sinon.test(function() {
                    var exprectedReturn = { test: 123 };

                    var stub = this.stub(FooResource, "save").returns(exprectedReturn);

                    var returnedInstace = fooInstance.$save();

                    returnedInstace.should.equal(exprectedReturn);
                }));

            });

        });

    });

});

