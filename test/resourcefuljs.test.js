var Resource = require("../resourcefuljs.js").Resource;

describe("Resource", function() {

    it("return instance of Resource", function() {
        var resource = new Resource();

        resource.should.be.an.instanceof(Resource);
    });

    it("constructor should set name", function() {
        var resource = new Resource("foo");

        resource.name.should.equal("foo");
    });

});

