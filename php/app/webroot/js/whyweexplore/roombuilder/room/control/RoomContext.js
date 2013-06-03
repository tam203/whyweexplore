define([
    'dojo/topic',
    'dojo/_base/lang',
    'whyweexplore/roombuilder/room/events/SetBackGroundImageEvent',
    'whyweexplore/roombuilder/room/control/RoomBackgroundImageUploadController'
    ],
    function (topic, lang, SetBackGroundImageEvent, RoomBackgroundImageUploadController) {
    return {execute:function(){
        var roomBackgroundImageUploadController = new (RoomBackgroundImageUploadController);
        topic.subscribe(SetBackGroundImageEvent.SET_BACKGROUND_IMAGE_BUTTON_CLICKED,
                        lang.hitch(roomBackgroundImageUploadController, roomBackgroundImageUploadController.execute));
    }};
});