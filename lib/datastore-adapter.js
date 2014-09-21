var PersistenceAdapter = require("./persistence-adapter");

function DatastoreAdapter() {
    throw new Error("New operator is not allowed on DatastoreAdaptor, only on allowed on adapter implementations");
}
DatastoreAdapter.prototype = Object.create(PersistenceAdapter.prototype);
DatastoreAdapter.prototype.constructor = DatastoreAdapter;

module.exports = DatastoreAdapter;
