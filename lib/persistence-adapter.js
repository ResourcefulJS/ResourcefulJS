var Adapter = require("./adapter");

function PersistenceAdapter() {
    throw new Error("New operator is not allowed on PersistenceAdapter, only on allowed on adapter implementations");
}
PersistenceAdapter.prototype = Object.create(Adapter.prototype);
PersistenceAdapter.prototype.constructor = PersistenceAdapter;

PersistenceAdapter.prototype.save = function (resource) {
    throw new Error("Save is not allowed on PersistenceAdapter, only on allowed on adapter implementations");
};

module.exports = PersistenceAdapter;
