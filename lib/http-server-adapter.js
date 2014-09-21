var Adapter = require("./adapter");

function HttpServerAdapter() {
    throw new Error("New operator is not allowed on HttpServerAdapter, only allowed on adapter implementations");
}
HttpServerAdapter.prototype = Object.create(Adapter.prototype);
HttpServerAdapter.prototype.constructor = HttpServerAdapter;

module.exports = HttpServerAdapter;
