var Resource = function(name) {
    this.name = name;

    this._datasource = {};
};

Resource.prototype.list = function() {
    console.info("list", this.name);
    var promise = this._datasource.list();
    promise.then(
        function(resources) {
            console.log("resource.list", resources);
        },
        function(reason) {
            console.error("resource.list", reason);
        }
    );
    return promise;
};

Resource.prototype.create = function(data) {
    console.info("create", this.name, data);
    var promise = this._datasource.create(data);
    promise.then(
        function(resource) {
            console.log("resource.create", resource);
        },
        function(reason) {
            console.error("resource.create", reason);
        }
    );
    return promise;
};

Resource.prototype.read = function(id) {
    console.info("read", this.name, id);
    var promise = this._datasource.read(id);
    promise.then(
        function(resource) {
            console.log("resource.read", resource);
        },
        function(reason) {
            console.error("resource.read", reason);
        }
    );
    return promise;
};

Resource.prototype.replace = function(id, data) {
    console.info("replace", this.name, id, data);
    var promise = this._datasource.replace(id, data);
    promise.then(
        function(resource) {
            console.log("resource.replace", resource);
        },
        function(reason) {
            console.error("resource.replace", reason);
        }
    );
    return promise;
};

Resource.prototype.update = function(id, data) {
    console.info("update", this.name, id, data);
    var promise = this._datasource.update(id, data);
    promise.then(
        function(resource) {
            console.log("resource.update", resource);
        },
        function(reason) {
            console.error("resource.update", reason);
        }
    );
    return promise;
};

Resource.prototype.delete = function(id) {
    console.info("delete", this.name, id);
    var promise = this._datasource.delete(id);
    promise.then(
        function(resource) {
            console.log("resource.delete", resource);
        },
        function(reason) {
            console.error("resource.delete", reason);
        }
    );
    return promise;
};


module.exports = Resource;
