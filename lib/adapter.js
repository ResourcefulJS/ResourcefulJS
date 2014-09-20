
function Adapter() {
    throw new Error("New operator is not allowed on Adaptor, only allowed on adapter implementations");
}

module.exports = Adapter;
