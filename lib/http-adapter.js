var Adapter = require("./adapter");

function HttpAdapter() {
    throw new Error("New operator is not allowed on HttpAdapter, only allowed on adapter implementations");
}
HttpAdapter.prototype = Object.create(Adapter.prototype);
HttpAdapter.prototype.constructor = HttpAdapter;


module.exports = HttpAdapter;
