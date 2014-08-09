var _ = require("lodash");

var Adapter = require("./adapter")

function HttpAdapter() {

}


//HttpAdapter.prototype = Adapter;
//HttpAdapter.prototype.constructor = HttpAdapter;
HttpAdapter.prototype = _.create(Adapter.prototype, { 'constructor': HttpAdapter });
//HttpAdapter.prototype = Object.create(Adapter);


module.exports = HttpAdapter;
