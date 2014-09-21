var PersistenceAdapter = require("../lib/persistence-adapter");

function TestPersistenceAdapter() {
}
TestPersistenceAdapter.prototype = Object.create(PersistenceAdapter.prototype);
TestPersistenceAdapter.prototype.constructor = TestPersistenceAdapter;

TestPersistenceAdapter.prototype.save = function (resource) {
    return resource; //TODO should return a promise
};

module.exports = new TestPersistenceAdapter();
