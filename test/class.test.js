var Resource = require("../lib/class");

describe("Class", function() {

    describe("#define", function() {

        it("should return a Class", function() {
            var resource = new Resource();

            resource.should.be.instanceof(Resource);
        });

    });

});

