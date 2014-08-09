var _ = require("lodash");

var Adapter = require("./adapter")

function DatastoreAdapter() {

}


//DatastoreAdapter.prototype = Adapter;
//DatastoreAdapter.prototype.constructor = DatastoreAdapter;
DatastoreAdapter.prototype = _.create(Adapter.prototype, { 'constructor': DatastoreAdapter });
//DatastoreAdapter.prototype = Object.crate(Adapter);

module.exports = DatastoreAdapter;
