define(['dojo/_base/declare'], function (declare) {
    var Event = declare(null, {
        constructor:function(url){
            this.url = url;
        }
    });
    Event.NEW_ITEM_CREATED = "newItemCreated";
    return Event;
})