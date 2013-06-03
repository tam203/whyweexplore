define([
    'whyweexplore/roombuilder/room/control/RoomContext'
],
    function (topic, SetBackGroundImageEvent, RoomBackgroundImageUploadController) {
        return {execute:function(){
            RoomContext.execute();
        }};
    });