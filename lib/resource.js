function Resource() {
}

Resource.prototype.$save = function() {
    return this._datastoreAdapter.storeResource(this);
};

Resource.prototype.$delete = function() {
    return this._datastoreAdapter.deleteResource(this);
};



//Resource.create = function(data) {
//    return this._datastoreAdapter.createResource(data);
//};

Resource.get = function(id) {
    var resources = this._datastoreAdapter.findResourceById(id);
    if (!resources.length) {
        throw new Error("Resource not found");
    }
    if (resources.length != 1) {
        throw new Error("Non-unique id");
    }
    return resources[0];
};

Resource.find = function(query) {
    return this._datastoreAdapter.findResources(query);
};

module.exports = Resource;
