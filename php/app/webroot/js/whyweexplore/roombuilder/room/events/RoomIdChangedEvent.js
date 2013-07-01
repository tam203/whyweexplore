define(['dojo/_base/declare'], function (declare) {
    var Class = declare(null, {
        constructor:function(roomId){
            this.roomId = roomId;
        }

    });
    Class.ROOM_ID_CHANGED = "roomIdChanged";

    return Class;
})