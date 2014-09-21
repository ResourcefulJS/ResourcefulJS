var PersistenceAdapter = require("./persistence-adapter");

function HttpClientAdapter() {
    throw new Error("New operator is not allowed on HttpClientAdapter, only allowed on adapter implementations");
}
HttpClientAdapter.prototype = Object.create(PersistenceAdapter.prototype);
HttpClientAdapter.prototype.constructor = HttpClientAdapter;

module.exports = HttpClientAdapter;
