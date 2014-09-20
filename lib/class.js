var _ = require("lodash");

exports.define = function(name, object, staticObject, superClass) {

    var Class = {
        name: name
    };

    if (!superClass) {
        Class.__proto__ = superClass;
    }

    Class.prototype = Object.create(superClass.prototype, object);

    _.assign(Class, staticObject);

    return Class;
};
