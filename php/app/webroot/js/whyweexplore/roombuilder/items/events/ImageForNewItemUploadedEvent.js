define(['dojo/_base/declare'], function (declare) {
    var Event = declare(null, {
        constructor:function(url){
            this.url = url;
        }
    });
    Event.IMAGE_FOR_NEW_ITEM_UPLOADED = "imageForNewItemUploaded";
    return Event;
})