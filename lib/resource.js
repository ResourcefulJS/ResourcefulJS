function Resource() {
};

Resource.prototype.$save = function() {
    throw new Error("Not implemented");
}

Resource.prototype.$delete = function() {
    throw new Error("Not implemented");
}

module.exports = Resource;
