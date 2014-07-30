var resourcefuljs = require("../lib/resourcefuljs.js");
var Resource = require("../lib/resource.js");

describe("ResourcefulJS", function() {

    it("should return Resource class", function() {
        resourcefuljs.Resource.should.equal(Resource);
    });

});

