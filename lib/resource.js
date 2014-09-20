var _ = require("lodash");
var Promise = require('promise');

function Resource() {
    throw new Error("New operator is not allowed on Resource, only allowed on defined resources");
}

Resource.register = function(name, properties) {

    var DefinedResource;

    // some magic to have the function name correct for pretty debuging
    eval("DefinedResource = function " + name + "() { return constructorProxy.apply(this, arguments); };");

    function constructorProxy() {
        return DefinedResource.new.apply(this, arguments);
    }

    // Extending the Resource class
    DefinedResource.prototype = Object.create(Resource.prototype);
    DefinedResource.prototype.constructor = DefinedResource;

    // ********** Private functions ***********

    function toInstance(properties) {
        //TODO maybe fail if instance of Resource

        var resource = Object.create(DefinedResource.prototype);

        //TODO trasfer properties to resource
        mergeProperties(resource, properties);

        return resource;
    }

    function mergeProperties(resource, properties) {
        return _.merge(resource, properties);
    }

    // ********** Class properties ***********

    DefinedResource.new = function (properties) {
        //TODO maybe fail if property "_id" is set in properties

        var resource = toInstance(properties);

        return resource;
    };

    DefinedResource.save = function (resource) {
        var input = resource;

        if (!(input instanceof DefinedResource)) {
            resource = toInstance(input);
        }

        console.log("resource save");

        return resource;
    };

    // ********** Instance properties ***********

    DefinedResource.prototype.$save = function() {
        return DefinedResource.save(this);
    };


    return DefinedResource;
};

module.exports = Resource;
