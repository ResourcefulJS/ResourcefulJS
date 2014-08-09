var _ = require("lodash");

var Resource = require("./resource.js");

exports.define = function defineResource(name) {

    var DefinedResource;
    eval("DefinedResource = function " + name + "() { };");

//    var DefinedResource = function DefinedResource() {
//        Resource.call(this);
//    };

//    DefinedResource.prototype = Object.create(Resource);
//    DefinedResource.prototype.constructor = DefinedResource;

    DefinedResource.prototype = _.create(Resource.prototype, { 'constructor': DefinedResource });
//    DefinedResource.prototype = Object.create(Resource);

//    DefinedResource.name = name;
//    DefinedResource.adapter = null;

    return DefinedResource;
};

//ResourceFactory.prototype.list = function() {
//    console.info("list", this.name);
//    var promise = this._datasource.list();
//    promise.then(
//        function(resources) {
//            console.log("resource.list", resources);
//        },
//        function(reason) {
//            console.error("resource.list", reason);
//        }
//    );
//    return promise;
//};
//
//ResourceFactory.prototype.create = function(data) {
//    console.info("create", this.name, data);
//    var promise = this._datasource.create(data);
//    promise.then(
//        function(resource) {
//            console.log("resource.create", resource);
//        },
//        function(reason) {
//            console.error("resource.create", reason);
//        }
//    );
//    return promise;
//};
//
//ResourceFactory.prototype.read = function(id) {
//    console.info("read", this.name, id);
//    var promise = this._datasource.read(id);
//    promise.then(
//        function(resource) {
//            console.log("resource.read", resource);
//        },
//        function(reason) {
//            console.error("resource.read", reason);
//        }
//    );
//    return promise;
//};
//
//ResourceFactory.prototype.replace = function(id, data) {
//    console.info("replace", this.name, id, data);
//    var promise = this._datasource.replace(id, data);
//    promise.then(
//        function(resource) {
//            console.log("resource.replace", resource);
//        },
//        function(reason) {
//            console.error("resource.replace", reason);
//        }
//    );
//    return promise;
//};
//
//ResourceFactory.prototype.update = function(id, data) {
//    console.info("update", this.name, id, data);
//    var promise = this._datasource.update(id, data);
//    promise.then(
//        function(resource) {
//            console.log("resource.update", resource);
//        },
//        function(reason) {
//            console.error("resource.update", reason);
//        }
//    );
//    return promise;
//};
//
//ResourceFactory.prototype.delete = function(id) {
//    console.info("delete", this.name, id);
//    var promise = this._datasource.delete(id);
//    promise.then(
//        function(resource) {
//            console.log("resource.delete", resource);
//        },
//        function(reason) {
//            console.error("resource.delete", reason);
//        }
//    );
//    return promise;
//};
//
//
//module.exports = ResourceFactory;
