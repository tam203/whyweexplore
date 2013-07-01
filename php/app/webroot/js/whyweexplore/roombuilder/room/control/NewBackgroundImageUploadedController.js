define([
    'dojo/_base/declare',
    'whyweexplore/roombuilder/room/model/theRoom'],
    function (declare, theRoom) {
    var NewBackgroundImageUploadedController = declare(null, {
        execute:function(e){
            if(e.url)
            {
                theRoom.setRoomBackground(e.url.substr(1));
            }
        }
    });
    return NewBackgroundImageUploadedController;
});