var Resource = require("../lib/resource.js");

describe("Resource", function() {

    it("should return instance of Resource", function() {
        var resource = new Resource();

        resource.should.be.an.instanceof(Resource);
    });

    it("constructor should set name", function() {
        var resource = new Resource("foo");

        resource.name.should.equal("foo");
    });

});

