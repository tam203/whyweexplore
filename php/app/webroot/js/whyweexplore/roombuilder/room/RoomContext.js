define([
    'dojo/topic',
    'dojo/_base/lang',
    'whyweexplore/roombuilder/room/events/NewRoomBackgoundSetEvent',
    'whyweexplore/roombuilder/room/control/NewBackgroundImageUploadedController',
    'whyweexplore/roombuilder/room/events/RoomExportEvent',
    'whyweexplore/roombuilder/room/control/RoomExportController'


    ],
    function (topic, lang, NewRoomBackgoundSetEvent, NewBackgroundImageUploadedController,
              RoomExportEvent, RoomExportController) {
    return {execute:function(){
        var newBackgroundImageUploadedController = new NewBackgroundImageUploadedController;
        topic.subscribe(NewRoomBackgoundSetEvent.NEW_BACKGROUND_IMAGE_SET,
                        lang.hitch(newBackgroundImageUploadedController, newBackgroundImageUploadedController.execute));

        var newRoomExportController = new RoomExportController;
        topic.subscribe(RoomExportEvent.ROOM_EXPORT,
            lang.hitch(newRoomExportController, newRoomExportController.execute));

    }};
});