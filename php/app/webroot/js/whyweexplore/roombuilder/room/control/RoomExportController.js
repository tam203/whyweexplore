define([
    'dojo/_base/declare',
    'whyweexplore/roombuilder/room/model/theRoom',
    'whyweexplore/roombuilder/room/model/rooms'],
    function (declare, theRoom, rooms) {
    var RoomExportController = declare(null, {
        execute:function(e){
            rooms.put(theRoom.toGameJSON()).then(function(savedRoom){
                console.log("just saved:");
                console.log(savedRoom);
                if(typeof(savedRoom) == typeof("")){
                    savedRoom = JSON.parse(savedRoom);
                }
                theRoom.set("roomId", savedRoom.id);

            });
        }
    });
    return RoomExportController;
});