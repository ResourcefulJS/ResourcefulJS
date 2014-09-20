var Adapter = require("./adapter")

function DatastoreAdapter() {
    throw new Error("New operator is not allowed on DatastoreAdaptor, only on allowed on adapter implementations");
}
DatastoreAdapter.prototype = Object.create(Adapter.prototype);
DatastoreAdapter.prototype.constructor = DatastoreAdapter;

module.exports = DatastoreAdapter;
