define([
    "dojo/store/JsonRest"
], function(
    JsonRest
) {
    var store = new JsonRest({
        target: "rooms/api/"
    });

    return store;
});